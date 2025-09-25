import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

export const useCounter = () => {
      const [count, setCount] = useState<number>(10)  
    
      const increaseBy = (value: number) => {
        setCount(Math.max(value+count, 0)) 
      }


  return {
        //propietatte
        count,

        //Actionnnne
        increaseBy,
  }
}
