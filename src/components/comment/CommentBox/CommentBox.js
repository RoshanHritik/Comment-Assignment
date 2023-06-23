import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/material";
import image from "../../../assests/product_1.png";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/Comment/commentSlice";
import { v4 as uuidv4 } from "uuid";

const CommentBox = () => {
  const [commentText, setCommentText] = useState("");
  const commentInputRef = useRef(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const timestamp = new Date().toLocaleString();
  // console.log(user.picture);
  // console.log(timestamp);
  const handleAddComment = (event) => {
    event.preventDefault();
    if (commentText.trim().length === 0) {
      alert("Enter a task before adding !!");
      setCommentText("");
      return;
    }
    dispatch(
      addComment({
        id: uuidv4(),
        content: commentText,
        user: {
          name: user.name,
          email: user.email,
          picture: user.picture
        },
        timestamp: timestamp,
      })
    );
    setCommentText("");
  };
  return (
    <>
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
        marginBottom={"35px"}
        backgroundColor={"#e6e6e6"}
        boxShadow="!important"
      >
        <Box>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: 600,
              padding: "1rem",
              boxShadow: "none",
            }}
          >
            <Box>
              <Avatar src={user.picture} alt="Profile Image" />
            </Box>
            <Box>
              <TextareaAutosize
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Add a comment..."
                style={{
                  width: "420px",
                  minWidth: "420px",
                  height: "80px",
                  maxWidth: "420px",
                  maxHeight: "80px",
                  minHeight: "80px",
                }}
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                ref={commentInputRef}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4636b0" }}
                onClick={handleAddComment}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default CommentBox;
