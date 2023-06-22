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
      <Box marginTop={"20px"}>
        <Paper
          key={id}
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            width: 600,
            height: 150,
            padding: "1rem",
          }}
        >
          {/* <Box container spacing={2}> */}
          <Box display="flex" alignItems="center" justifyContent="center">
            {/* <Box item> */}
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              fontStyle="inherit"
              height={"100px"}
              backgroundColor="#e6e6e6"
              marginTop={"35px"}
              marginLeft={"5px"}
              borderRadius={"10px"}
              marginBottom={"30px"}
            >
              <IconButton
                size="small"
                aria-label="Add"
                color="#4636b0"
                onClick={handleUpvote}
              >
                <AddIcon style={{ color: "#4636b0" }} />
              </IconButton>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "#4636b0" }}
                  // paddingTop={"12px"}
                >
                  {number}
                </Typography>
                <IconButton
                  size="small"
                  aria-label="Subtract"
                  onClick={handleDownvote}
                >
                  <RemoveIcon
                    style={{ color: "#4636b0", marginBottom: "20px" }}
                  />
                </IconButton>
            </Box>
            {/* </Box> */}
            <Box
              fontStyle="inherit"
              marginLeft={"25px"}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
                <Avatar
                  src={image}
                  alt="Profile Image"
                  sx={{ width: 32, height: 32 }}
                />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  fontWeight={"16px"}
                  marginLeft={"20px"}
                >
                  ramesmiron
                </Typography>
                {!commentDetails && (
                  <Paper
                    sx={{
                      backgroundColor: "#4636b0",
                      color: "white",
                      padding: "2px 5px",
                      borderRadius: "3px",
                      marginLeft: "15px",
                    }}
                  >
                    <Typography variant="body1">you</Typography>
                  </Paper>
                )}
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  marginLeft={"15px"}
                >
                  Stand
                </Typography>
                <Box>
                  {button === 0 ? (
                    <Box paddingLeft={"220px"}>
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
                    <Box sx={{ display: "flex", alignItems: "center" }}>
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
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon
                          sx={{
                            color: "#4636b0",
                            marginLeft: "20px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
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
              <Box
                sx={{
                  maxHeight: 80,
                  overflowY: "auto",
                  paddingTop: "15px",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f1f1f1",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                <Typography gutterBottom variant="subtitle1" component="div">
                  {commentDetails}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
        </Paper>
      </Box>
      {/* {replyBoxVisible && <ReplyBox toggleReplyBox={toggleReplyBox} />} */}
      {activeCommentId === id && replyBoxVisible && (
        <>
          <ReplyBox
            toggleReplyBox={toggleReplyBox}
            activeCommentId={activeCommentId}
          />

          <ReplyList activeCommentId={activeCommentId} />
        </>
      )}
    </>
  );
};

export default CommentItem;
