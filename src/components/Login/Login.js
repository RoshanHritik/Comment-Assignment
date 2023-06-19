import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Login = () => {      
  const [ user, setUser ] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    window.location.href = `/user/${userObject.name.split(' ')[0].toLowerCase()}`;
  }

  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    window.location.href = '/';
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "450217950087-8bfm2j14flpm2es26mqforgro1epg55t.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

    google.accounts.id.prompt();
  },[]);

  // If we have no user: sign in button
  // If we have a user: show the log out button

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 && 
        <button onClick={ (event) => handleSignOut(event)}>Sign Out</button>
      }
      {user && 
        <div>
          <h3>{user.name}</h3>
          <img src={user.picture} alt='' />
        </div>
      }
    </div>
  );
}

export default Login;