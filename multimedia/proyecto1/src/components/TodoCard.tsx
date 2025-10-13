import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const TodoCard = () => {
    const { todos, addTodo, toggleTodo, removeTodo, clearTodos } = useTodos([]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        addTodo(inputValue);
        setInputValue("");
    };

    return (
        <div className="rounded-2xl shadow-lg bg-white dark:bg-neutral-800 p-6 text-center transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600 dark:text-sky-400">
                Lista de Tareas
            </h2>

            <div className="flex justify-center gap-2 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nueva tarea"
                    className="border rounded-lg px-3 py-1 text-center w-52 dark:bg-neutral-700 dark:text-white"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                    Añadir
                </button>
            </div>

            <ul className="text-left max-h-64 overflow-y-auto mb-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-100 dark:bg-neutral-700 px-3 py-2 mb-2 rounded-lg"
                    >
            <span
                onClick={() => toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer ${
                    todo.done
                        ? "line-through text-gray-500 dark:text-gray-400"
                        : "text-gray-800 dark:text-gray-100"
                }`
            }>
                {todo.text}
            </span>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="text-red-500 hover:text-red-700 ml-3"
                        >✕</button>
                    </li>
                ))}
            </ul>

            {todos.length > 0 && (
                <button
                    onClick={clearTodos}
                    className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
                >Limpiar todo</button>
            )}
        </div>
    );
};
