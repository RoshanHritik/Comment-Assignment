import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import ReplyItem from "./ReplyItem";


const ReplyList = ({ activeCommentId }) => {
  // console.log("Hrk");
  console.log(activeCommentId);

    const comments = useSelector((state) => state.comments.comments)
    const comment = comments.find((c) => c.id === activeCommentId);

    if (!comment) {
      return null; // Comment not found, handle it accordingly
    }
  // console.log(comment.replies);
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh" flexDirection="column">
      {comment.replies.map((reply) => (
        <ReplyItem key={reply.id} id={reply.id} replyDetails={reply.content} />
      ))}
      </Box>
    </>
  );
};

export default ReplyList;
