import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
    CHECKING = 'checking',
    AUTHENTIATED = 'authenticated',
    NOT_AUTHENTICATED = 'not_authenticated'
}

interface AuthState {
    status?: AuthStatus;
    token?: string;
    user?: User;
    errorMessage?: string

}

interface User {
    name: string;
    email: string;
}



 export const AuthContext = createContext({} as AuthState)

 export const useAuthContext = () => useContext(AuthContext)

 export const AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.CHECKING);

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.NOT_AUTHENTICATED)
        }, 1500)
    },)
    

    return (
        <AuthContext.Provider value={{
            status : status
        }}>
            {children}
        </AuthContext.Provider>
    )
 }