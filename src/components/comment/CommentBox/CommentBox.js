import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/material";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/Comment/commentSlice";
import { v4 as uuidv4 } from "uuid";
import style from "./CommentBox.style";

const CommentBox = () => {
  const [commentText, setCommentText] = useState("");
  const commentInputRef = useRef(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const timestamp = new Date().toLocaleString();
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
          picture: user.picture,
        },
        timestamp: timestamp,
      })
    );
    setCommentText("");
  };
  return (
    <>
      <Box sx={style.mainWrapper}>
        <Box>
          <Paper sx={style.commentBoxWrapper}>
            <Box>
              <Avatar src={user.picture} alt="Profile Image" />
            </Box>
            <Box>
              <TextareaAutosize
                // helperText=" "
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
