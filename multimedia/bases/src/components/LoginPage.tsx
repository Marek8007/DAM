import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const {isChecking, isAuthenticated, user, loginWithEmailAndPassword, logout} = useAuthContext()

    // if (isChecking) {
    //   return <h3>Verificando usuario...</h3>
    // }

  return (
    <>
      { isAuthenticated ? (
        <>
        <h3>Bienvenido</h3>

        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>

        <button 
        onClick={() => logout()}
        className="bg-red-500 p-2 text-white rounded-xl mt-2">Salir</button>
        </>
      ) : (
        <>
          <h3>Log in</h3>
        <button 
        onClick={() => loginWithEmailAndPassword("marmiqlis@alu.edu.gva.es", "7856")}
        className="bg-green-500 p-2 text-white rounded-xl mt-2">Acceder</button>
        </>
      )
      }
    </>
  )
}
