import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Hidden, TextareaAutosize } from "@mui/material";
import image from "../../../assests/product_1.png";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/Comment/commentSlice";
import { v4 as uuidv4 } from "uuid";

const CommentBox = () => {
  const [commentText, setCommentText] = useState("");
  const commentInputRef = useRef(null);
  const dispatch = useDispatch();

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
        // overflow="hidden"
      >
        <Grid>
          <Box display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ width: 600, padding: "1rem" }}>
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
                      width: "100%",
                      height: "80px",
                      maxWidth: "100%",
                      maxHeight: "80px",
                    }}
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                    ref={commentInputRef}
                  />
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4636b0" }}
                    onClick={handleAddComment}
                  >
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

export default CommentBox;
