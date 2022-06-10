import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''})

        function toggleAuth() {
            if (isAuth.isAuth === false) {
                toggleIsAuth({...isAuth, isAuth: true})
                console.log("Gebruiker is ingelogd")
            } else {
                toggleIsAuth({...isAuth, isAuth: false})
                console.log("Gebruiker is uitgelogd")
            }
        }

        function saveUser(userName) {
            toggleIsAuth({...isAuth, user: userName})
        }

    return (
        <AuthContext.Provider value={{
            toggleAuth,
            saveUser,
            isAuth,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider