import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
    CHECKING = 'checking',
    AUTHENTICATED = 'authenticated',
    NOT_AUTHENTICATED = 'not_authenticated'
}

interface AuthState {
    status?: AuthStatus;
    token?: string;
    user?: User;
    errorMessage?: string;
    isChecking?: boolean;
    isAuthenticated?: boolean;

    loginWithEmailAndPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name?: string;
    email?: string;
}

 export const AuthContext = createContext({} as AuthState)

 export const useAuthContext = () => useContext(AuthContext)

 export const AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.CHECKING);
    const [user, setUser] = useState<User>()

    // useEffect(() => {
    //     setTimeout(() => {
    //         setStatus(AuthStatus.NOT_AUTHENTICATED)
    //     }, 1500)
    // },)
    
    const loginWithEmailAndPassword = (email: string, password: string) => {
        setUser({
            name: "Marcos",
            email: email,
        })
        setStatus(AuthStatus.AUTHENTICATED)
    }

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.NOT_AUTHENTICATED)
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            
            isChecking: status == AuthStatus.CHECKING,
            isAuthenticated: status == AuthStatus.AUTHENTICATED,

            loginWithEmailAndPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
 }