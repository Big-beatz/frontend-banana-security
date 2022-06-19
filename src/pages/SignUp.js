import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";

function SignUp() {
    const history = useHistory()
    const [account, setAccount] = useState({
        mailadres: null,
        password: null,
        username: null})

    console.log(account)

   async function handleRegister(e){
       e.preventDefault()
       try{
           const response = await axios.post('http://localhost:3000/register',
               {email: account.mailadres,
                   password: account.password,
                   username: account.username})
           console.log(response.data.accessToken)
           history.push('/signin')
       } catch(e){
           console.error(e)
       }
   }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleRegister}>
          <label htmlFor="Registeren" id="emailadres">E-mailadres</label>
          <input type="text"
                 id="emailadres"
                 value={account.mailadres}
                 onChange={(e) => setAccount({...account, mailadres: e.target.value})}
          />
          <label htmlFor="Registeren"
                 id="wachtwoord"
          >
              Wachtwoord
          </label>
          <input
              type="password"
              id="password"
              value={account.password}
              onChange={(e) => setAccount({...account, password: e.target.value})}
          />
          <label htmlFor="Registreren"
                 id="username"

          >
              Username
          </label>
          <input type="text"
                 id="username"
                 value={account.username}
                 onChange={(e) => setAccount({...account, username: e.target.value})}/>
          <button>Registreren</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;