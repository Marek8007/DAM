import { useState } from "react";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export const useTodos = (initialTodos: Todo[] = []) => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const addTodo = (text: string) => {
        if (!text.trim()) return;
        const newTodo: Todo = {
            id: Date.now(),
            text,
            done: false,
        };
        todos.push(newTodo);
        setTodos(todos);
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const removeTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const clearTodos = () => setTodos([]);

    return { todos, addTodo, toggleTodo, removeTodo, clearTodos };
};
