import React, {createContext, useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import axios from "axios"

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({isAuth: false, user: null})
    const history = useHistory()

        function login(){
            toggleAuth({...auth, isAuth: true})
            history.push('/profile')
            console.log('Gebruiker is ingelogd')
        }

        function logout(){
        console.log("gebruiker is uitgelogd")
            toggleAuth({...auth, isAuth: false})
            history.push('/')
        }

        const dataContext = {
            isAuth: auth.isAuth,
            login: login,
            logout: logout,
        }

    return (
        <AuthContext.Provider value={dataContext}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider