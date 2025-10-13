import { useState } from 'react'
import {CounterCard} from "./components/CounterCard.tsx";
import {TodoCard} from "./components/TodoCard.tsx";

function App() {

  return (
    <>
        <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">React + TS + Hooks + Tailwind</h1>
            <p className="text-grey-600 mb-8">
                Cada tarjeta usa su propio <code className="font-mono">custom hook</code> para manejar estado y acciones.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                <CounterCard/>
                <TodoCard/>
            </div>
        </div>
    </main>
    </>
  )
}

export default App
