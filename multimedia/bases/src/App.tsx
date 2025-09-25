import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript/ObjectLiterals'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter } from './components/Counter'
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './components/LoginPage'

function App() {
  return (
    <>
    <AuthProvider>
      <div className="flex flex-col justify-center items-center g-svh">
      {/* <h3 className='flex justify-center items-center h-svh'>hola buenas tardes</h3> */}

      {/* <BasicTypes/> */}
      {/* <ObjectLiterals/> */}
      {/* <BasicFunctions/> */}
      {/* <Counter/> */}
      <LoginPage/>
    </div>




    </AuthProvider>
    
      
    </>
  )
}

export default App
