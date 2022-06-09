import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


function SignIn() {
    const history = useHistory()
const {toggleAuth, isAuth} = useContext(AuthContext)


function handleLogin(e){
        e.preventDefault()
        toggleAuth()
        history.push('/')
}

    return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleLogin}>
          <label htmlFor="emailadres" id="emailadres">E-mail</label>
          <input type="text"
                 placeholder="voorbeeld@website.nl"
                 id="emailadres"
          />
          <label htmlFor="wachtwoord" id="wachtwoord">Wachtwoord</label>
          <input type="password" id="wachtwoord"/>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;