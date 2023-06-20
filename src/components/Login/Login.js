import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

const Login = () => {      
  const [ user, setUser ] = useState({});
  const settings = ["Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    // window.location.href = `/user/${userObject.name.split(' ')[0].toLowerCase()}`;
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(userObject));
  }

  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    // window.location.href = '/';
    // Clear user data from local storage
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
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // If we have no user: sign in button
  // If we have a user: show the log out button

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 && 
        <>
        <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={user.picture} alt="Profile Image" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem key={settings} onClick={handleSignOut}>
                    <Typography textAlign="center">{settings}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <button onClick={ (event) => handleSignOut(event)}>Sign Out</button> */}
        </>
        
      }
      {/* {user && 
        <div>
          <h3>{user.name}</h3>
          <img src={user.picture} alt='' />
        </div>
      } */}
    </div>
  );
}

export default Login;