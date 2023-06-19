import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Login from "../Login/Login";

const pages = ["Comments"];

const Home = () => {
    
  const [ , setAnchorElNav] = React.useState(null);
  const [signIn, setSignIn] = React.useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSignIn = () => {
    setSignIn(true);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters
            sx={{height: "64px"}}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end"}}>
            {!signIn ? (
                <Button variant="contained" color="primary" onClick={handleSignIn}>
                Sign In
                </Button>
            ) : (
                <Box sx={{ display: "flex", alignItems: "flex-end", marginTop:"25px" }}>
                <Login signIn={signIn} />
                </Box>
            )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Home;
