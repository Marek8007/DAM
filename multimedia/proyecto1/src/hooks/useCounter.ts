import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = () => setCount((prev) => prev + 1);

    const decrement = () => setCount((prev) => prev - 1);

    const reset = () => setCount(0);

    const setCustomValue = (value: number) => setCount(value);

    return {
        count,
        increment,
        decrement,
        reset,
        setCustomValue,
    };
};