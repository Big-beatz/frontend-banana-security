import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from 'axios'


function SignIn() {
    const history = useHistory()
    const [account, setAccount] = useState({
        mailadres: null,
        password: null
    })
    console.log(account)
const {login} = useContext(AuthContext)

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/login', {
                mailadres: account.mailadres,
                    password: account.password,
                })
            console.log(response)
        }
        catch(e){
            console.error(e)
        }
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
                 value={account.mailadres}
                 onChange={(e) => setAccount({...account, mailadres: e.target.value})}
          />
          <label htmlFor="wachtwoord" id="wachtwoord">Wachtwoord</label>
          <input type="password"
                 id="wachtwoord"
                 value={account.password}
                 onChange={(e) => setAccount({...account, password: e.target.value})}
          />
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;