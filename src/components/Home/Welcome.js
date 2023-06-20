import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import image from "../../assests/product_1.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Comment from "../comment/MessageBox";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useParams } from 'react-router-dom';
import Login from "../Login/Login";

const pages = ["Comments"];
const settings = ["Logout"];

const Welcome = () => {
  const [signIn, setSignIn] = React.useState(false);
  const [userExists, setUserExists] = useState(false);
  const button = 0;
  const number = 11;
  const comment = true;
  const user = true;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleSignIn = () => {
    setSignIn(true);
  };

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
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');

    // Check if user data exists
    if (storedUser) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  }, []);


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
            {/* <SelectPlaceholder/> */}
            {userExists ? (
                <Box sx={{ display: "flex", alignItems: "flex-end", marginTop:"25px" }}>
                <SelectPlaceholder/>
                <Login signIn={signIn} />
                </Box>
            ):(
                <Button variant="contained" color="primary" onClick={handleSignIn}>
                Sign In
                </Button>
            ) }
          </Toolbar>
        </Container>
      </AppBar>
      <Comment />
    </>
  );
};

export default Welcome;
