import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/material";
// import image from "../../../assests/product_1.png";
import { useDispatch } from "react-redux";
import { addReply } from "../../../redux/Comment/commentSlice";
import { v4 as uuidv4 } from "uuid";

const ReplyBox = (activeCommentId) => {
  const [replyText, setReplyText] = useState("");
  const replyInputRef = useRef(null);
  const [replyBoxVisible, setReplyBoxVisible] = useState(true);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const timestamp = new Date().toLocaleString();

  const handleAddReply = (event) => {
    event.preventDefault();

    if (replyText.trim().length === 0) {
      alert("Enter a reply before adding!!");
      setReplyText("");
      return;
    }

    const newReply = {
      id: uuidv4(),
      content: replyText,
      parentId: activeCommentId.activeCommentId,
      user: {
        name: user.name,
        email: user.email,
        picture: user.picture
      },
      timestamp: timestamp,
    };
    console.log(activeCommentId.parentId);

    dispatch(
      addReply({
        commentId: activeCommentId.activeCommentId,
        reply: newReply,
      })
    );

    setReplyText("");
    setReplyBoxVisible(false);
  };
  return (
    <>
    {replyBoxVisible && (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        zIndex={9999}
      >
        <Grid>
          <Box display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ width: 600, padding: "1rem" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                  <Avatar src={user.picture} alt="Profile Image" />
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
                    value={replyText}
                    onChange={(event) => setReplyText(event.target.value)}
                    ref={replyInputRef}
                  />
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4636b0" }}
                    onClick={handleAddReply}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Box>
    )}
    </>
  );
};

export default ReplyBox;
