import React from 'react'

const addTwoNumbers = (a: number,b: number): string => {
    return `${a+b}`;
}

export const BasicFunctions = () => {
  return (
<>
    <h3>Basic Functions</h3>
    <span>El resultado de la suma 2 + 8 = {addTwoNumbers(2, 8)}</span>
</>

)
}
