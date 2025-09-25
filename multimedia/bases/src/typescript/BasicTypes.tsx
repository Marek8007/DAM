import React from 'react'

export const BasicTypes = () => {


    const name: string = 'Antonio'
    const age: number = 19
    const isActive: boolean = true;
    const powers: string[] = ['PHP', 'Python']


  return (
    <>
        <h3>BasicTypes</h3>
        { name } - {age} - {isActive?'Activo':'No activo'}
        <p>{powers.join(', ')}</p>
    </>
    
  )
}
