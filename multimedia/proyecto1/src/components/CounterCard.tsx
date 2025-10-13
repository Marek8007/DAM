import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterCard = () => {
    const { count, increment, decrement, reset, setCustomValue } = useCounter(0);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const num = Number(inputValue);
        if (!isNaN(num)) {
            setCustomValue(num);
            setInputValue("");
        }
    };

    return (
        <div className="rounded-2xl shadow-lg bg-white dark:bg-neutral-800 p-6 text-center transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600 dark:text-sky-400">
                Contador
            </h2>

            <p className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                {count}
            </p>

            <div className="flex justify-center gap-3 mb-4">
                <button
                    onClick={decrement}
                    className="p-2 bg-red-500 rounded-xl w-10 mx-2 text-white hover:bg-red-600"
                >-</button>
                <button
                    onClick={reset}
                    className="p-2 bg-gray-400 rounded-xl px-4 mx-2 text-white hover:bg-gray-500"
                >Reset</button>
                <button
                    onClick={increment}
                    className="p-2 bg-green-500 rounded-xl w-10 mx-2 text-white hover:bg-green-600"
                >+</button>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setCustomValue(Number(inputValue));
                }}
                className="flex justify-center gap-2">

                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nuevo valor"
                    className="border rounded-lg px-3 py-1 text-center w-28 dark:bg-neutral-700 dark:text-white"/>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >Set</button>
            </form>
        </div>
    );
};
