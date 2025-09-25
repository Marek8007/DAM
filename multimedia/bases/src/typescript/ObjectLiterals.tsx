import React from 'react'

export const ObjectLiterals = () => {

interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
        country: string;
        province: string;
        city: string;
        street?: string;
        number: number;
}


const person: Person = {
    age: 39, 
    firstName: 'Antonio',
    lastName: 'Lobato',
    address: {
        country: 'Spain',
        province: 'Valencia',
        city: 'Aldaia',
        number: 70
    }
}

  return (
    <>

    <h3>ObjectLiterals</h3>
    <pre>
        {JSON.stringify(person,null,2)}
    </pre>
        
    </>
  )
}
