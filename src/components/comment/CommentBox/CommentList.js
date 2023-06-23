import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";
const CommentList = () => {
    const comments = useSelector((state) => state.comments.comments)
    console.log(comments);
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh" flexDirection="column"
       marginBottom={"150px"}>
      {comments?.map((comment) => (
      <CommentItem key={comment.id} id={comment.id} commentDetails={comment.content} votes={comment.votes}
        name={comment.user.name} picture={comment.user.picture} timestamp={comment.timestamp}
      />))
      }
      </Box>
    </>
  );
};

export default CommentList;
