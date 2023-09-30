import { createContext, useState } from "react";

export const AuthenticationContext = createContext({});

export default function AuthenticationProvider({ children }: any) {
    const [user, setUser] = useState({});

    const login = (email, password) => {
        if (email == 'agathacristie@gmail.com' && password == 123) {
            setUser({
                name: 'Agatha Cristie',
                email: 'agathacristie@gmail.com',
                adress: 'Torquay, Inglaterra',
                tel: '(991) 9999999'
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            user,
            login
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
}