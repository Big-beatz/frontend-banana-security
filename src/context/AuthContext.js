import React, {createContext, useState} from 'react'

export const AuthContext = createContext(null)

function AuthContextProvider({children}){
    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''})

    function toggleAuth(){
        if(isAuth === false){
            toggleIsAuth(true)
            console.log("Gebruiker is ingelogd")
        } else{
            toggleIsAuth(false)
            console.log("Gebruiker is uitgelogd")
        }
    }


    return (
        <AuthContext.Provider value={{
            toggleAuth,
            isAuth,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider