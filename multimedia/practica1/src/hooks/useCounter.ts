import { useState } from "react"

export const useCounter = () => {
    const [count, setCount] = useState<number>(10)



    return {
        count,
    }
}