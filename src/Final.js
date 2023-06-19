import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import image from "./assests/product_1.png";
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
import SelectPlaceholder from "./SelectPlaceholder";

const pages = ["Comments"];
const settings = ["Profile", "Logout"];

const App = () => {
  const button = 0;
  const number = 11;
  const comment = true;
  const user = true;
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
            <SelectPlaceholder/>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh" flexDirection="column">
      {comment && 
      <>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            padding: "1rem",
          }}
        >
          
            <Grid container spacing={2}>
            <Box display="flex" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  fontStyle="inherit"
                >
                  <Box>
                    <IconButton size="small" aria-label="Add" color="#4636b0">
                      <AddIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#4636b0" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="Subtract">
                      <RemoveIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Grid item xs={12} container direction="column" spacing={0}>
                  <Grid item xs></Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={image} alt="Profile Image" />
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    {user && <Paper
                      sx={{
                        backgroundColor: "#4636b0",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography variant="body1">you</Typography>
                    </Paper>}
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {button === 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} />
                          </IconButton>
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            component="span"
                            style={{ color: "#4636b0" }}
                          >
                            Reply
                          </Typography>
                        </Box>
                      ) : (
                        <Box alignContent="center">
                          <IconButton size="small" aria-label="Edit">
                            <DeleteIcon style={{ color: "#c94f4f" }} />
                            <Typography
                              variant="subtitle1"
                              fontWeight={"bold"}
                              fontSize={"16px"}
                              component="span"
                              style={{ color: "#c94f4f" }}
                            >
                              Delete
                            </Typography>
                            <EditIcon style={{ color: "#4636b0" }} />
                            <Typography
                              variant="subtitle1"
                              fontWeight={"bold"}
                              fontSize={"16px"}
                              component="span"
                              style={{ color: "#4636b0" }}
                            >
                              Edit
                            </Typography>
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            padding: "1rem",
          }}
        >
          
            <Grid container spacing={2}>
            <Box display="flex" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  fontStyle="inherit"
                >
                  <Box>
                    <IconButton size="small" aria-label="Add" color="#4636b0">
                      <AddIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#4636b0" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="Subtract">
                      <RemoveIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Grid item xs={12} container direction="column" spacing={0}>
                  <Grid item xs></Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={image} alt="Profile Image" />
                    <Paper
                      sx={{
                        backgroundColor: "#4636b0",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography variant="body1">you</Typography>
                    </Paper>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {button === 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} />
                          </IconButton>
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            component="span"
                          >
                            Reply
                          </Typography>
                        </Box>
                      ) : (
                        <Box alignContent="center">
                          <IconButton size="small" aria-label="Edit">
                            <DeleteIcon style={{ color: "#c94f4f" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#c94f4f" }}
                            >
                              Delete
                            </Typography>
                            <EditIcon style={{ color: "#4636b0" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#4636b0" }}
                            >
                              Edit
                            </Typography>
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            padding: "1rem",
          }}
        >
            <Grid container spacing={2}>
            <Box display="flex" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  fontStyle="inherit"
                >
                  <Box>
                    <IconButton size="small" aria-label="Add" color="#4636b0">
                      <AddIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#4636b0" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="Subtract">
                      <RemoveIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Grid item xs={12} container direction="column" spacing={0}>
                  <Grid item xs></Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={image} alt="Profile Image" />
                    <Paper
                      sx={{
                        backgroundColor: "#4636b0",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography variant="body1">you</Typography>
                    </Paper>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {button === 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} />
                          </IconButton>
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            component="span"
                          >
                            Reply
                          </Typography>
                        </Box>
                      ) : (
                        <Box alignContent="center">
                          <IconButton size="small" aria-label="Edit">
                            <DeleteIcon style={{ color: "#c94f4f" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#c94f4f" }}
                            >
                              Delete
                            </Typography>
                            <EditIcon style={{ color: "#4636b0" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#4636b0" }}
                            >
                              Edit
                            </Typography>
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            padding: "1rem",
          }}
        >
            <Grid container spacing={2}>
            <Box display="flex" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  fontStyle="inherit"
                >
                  <Box>
                    <IconButton size="small" aria-label="Add" color="#4636b0">
                      <AddIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#4636b0" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="Subtract">
                      <RemoveIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Grid item xs={12} container direction="column" spacing={0}>
                  <Grid item xs></Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={image} alt="Profile Image" />
                    <Paper
                      sx={{
                        backgroundColor: "#4636b0",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography variant="body1">you</Typography>
                    </Paper>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {button === 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} />
                          </IconButton>
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            component="span"
                          >
                            Reply
                          </Typography>
                        </Box>
                      ) : (
                        <Box alignContent="center">
                          <IconButton size="small" aria-label="Edit">
                            <DeleteIcon style={{ color: "#c94f4f" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#c94f4f" }}
                            >
                              Delete
                            </Typography>
                            <EditIcon style={{ color: "#4636b0" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#4636b0" }}
                            >
                              Edit
                            </Typography>
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            padding: "1rem",
          }}
        >
          
            <Grid container spacing={2}>
            <Box display="flex" alignItems="center">
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  fontStyle="inherit"
                >
                  <Box>
                    <IconButton size="small" aria-label="Add" color="#4636b0">
                      <AddIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#4636b0" }}
                    >
                      {number}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="Subtract">
                      <RemoveIcon style={{ color: "#4636b0" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Grid item xs={12} container direction="column" spacing={0}>
                  <Grid item xs></Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={image} alt="Profile Image" />
                    <Paper
                      sx={{
                        backgroundColor: "#4636b0",
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        marginLeft: "10px",
                      }}
                    >
                      <Typography variant="body1">you</Typography>
                    </Paper>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {button === 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} />
                          </IconButton>
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            component="span"
                          >
                            Reply
                          </Typography>
                        </Box>
                      ) : (
                        <Box alignContent="center">
                          <IconButton size="small" aria-label="Edit">
                            <DeleteIcon style={{ color: "#c94f4f" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#c94f4f" }}
                            >
                              Delete
                            </Typography>
                            <EditIcon style={{ color: "#4636b0" }} />
                            <Typography
                              variant="h6"
                              fontWeight={"bold"}
                              component="span"
                              style={{ color: "#4636b0" }}
                            >
                              Edit
                            </Typography>
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Paper>
        </>
      }
      </Box>
      <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      zIndex={9999}
    >
      <Grid>
        <Box display="flex" justifyContent="center">
          <Paper elevation={3} sx={{ width: 600, padding: '1rem' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Avatar src={image} alt="Profile Image" />
              </Grid>
              <Grid item xs={9}>
                <TextareaAutosize
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  placeholder="Add a comment..."
                  style={{
                    width: '100%',
                    height: '80px',
                    maxWidth: '100%',
                    maxHeight: '80px',
                  }}
                />
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'right' }}>
                <Button variant="contained" style={{ backgroundColor: '#4636b0' }}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Box>
    </>
  );
};

export default App;
