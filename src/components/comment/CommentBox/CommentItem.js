import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import image from "../../../assests/product_1.png";
import { useDispatch } from "react-redux";
import {
  deleteComment,
  upvoteComment,
  downvoteComment,
} from "../../../redux/Comment/commentSlice";
import ReplyBox from "../ReplyBox/ReplyBox";
import ReplyList from "../ReplyBox/ReplyList";

const CommentItem = ({ id, commentDetails }) => {
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [replyBoxVisible, setReplyBoxVisible] = useState(false);
  const button = 1;
  const number = 0;
  const dispatch = useDispatch();
  // console.log(commentDetails);

  const removeComment = () => {
    dispatch(
      deleteComment({
        id,
      })
    );
  };
  const handleUpvote = () => {
    dispatch(upvoteComment(id));
  };

  const handleDownvote = () => {
    dispatch(downvoteComment(id));
  };
  const toggleReplyBox = () => {
    setActiveCommentId(id);
    setReplyBoxVisible(!replyBoxVisible);
  };
  return (
    <>
      <Paper
        key={id}
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
                  <IconButton
                    size="small"
                    aria-label="Add"
                    color="#4636b0"
                    onClick={handleUpvote}
                  >
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
                  <IconButton
                    size="small"
                    aria-label="Subtract"
                    onClick={handleDownvote}
                  >
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
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard
                  </Typography>
                  {commentDetails && (
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
                  )}
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard
                  </Typography>
                  <Box>
                    {button !== 0 ? (
                      <Box>
                        <IconButton
                          size="small"
                          aria-label="Reply"
                          onClick={toggleReplyBox}
                          // disabled={isReplyBoxOpen}
                        >
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
                        <IconButton size="small">
                          <DeleteIcon style={{ color: "#c94f4f" }} />
                          <Typography
                            variant="subtitle1"
                            fontWeight={"bold"}
                            fontSize={"16px"}
                            component="span"
                            style={{ color: "#c94f4f" }}
                            onClick={removeComment}
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
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {commentDetails}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Paper>
      {/* {replyBoxVisible && <ReplyBox toggleReplyBox={toggleReplyBox} />} */}
      {activeCommentId === id && replyBoxVisible && (
        <>
          <ReplyBox
            toggleReplyBox={toggleReplyBox}
            activeCommentId={activeCommentId}
          />
          
          <ReplyList activeCommentId={activeCommentId}/>
        </>
      )}
    </>
  );
};

export default CommentItem;
