import React, {useState, useRef} from "react";
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
import { TextareaAutosize } from "@mui/material";

const Comment = () => {
  const button = 0;
  const number = 11;
  const comment = true;
  const user = true;
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const commentInputRef = useRef(null);
  
  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: Math.random().toString(),
        text: commentText,
        replies: [],
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const handleAddReply = (commentId) => {
    const replyText = prompt("Enter your reply");
    if (replyText && replyText.trim() !== "") {
      const newReply = {
        id: Math.random().toString(),
        text: replyText,
      };
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReply],
            };
          }
          return comment;
        })
      );
    }
  };

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh" flexDirection="column">
      {comments.map((comment) => (
      <>
        <Paper
        key={comment.id}
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
                      {comment.number}
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
                    {Comment.user && 
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
                    </Paper>}
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Box>
                      {comment.button !== 0 ? (
                        <Box>
                          <IconButton size="small" aria-label="Reply">
                            <ReplyIcon style={{ color: "#4636b0" }} handleAddReply={handleAddReply}/>
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
        </>))
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
                  value={commentText}
                    onChange={handleInputChange}
                    ref={commentInputRef}
                />
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'right' }}>
                <Button variant="contained" style={{ backgroundColor: '#4636b0' }} onClick={handleAddComment}>
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

export default Comment;
