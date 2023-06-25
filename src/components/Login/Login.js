import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Login = () => {      
  const [ user, setUser ] = useState({});
  
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    window.location.href = `/sport`;
    localStorage.setItem('user', JSON.stringify(userObject));
  }

  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    localStorage.removeItem('user');
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
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="App">
      <div id="signInDiv">
      </div>
    </div>
  );
}

export default Login;