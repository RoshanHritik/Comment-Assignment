import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import ReplyItem from "./ReplyItem";
import styles from "./ReplyList.style.js";


const ReplyList = ({ activeCommentId }) => {
  // console.log("Hrk");
  console.log(activeCommentId);

    const comments = useSelector((state) => state.comments.comments)
    const comment = comments.find((c) => c.id === activeCommentId);

    if (!comment) {
      return null;
    }
  return (
    <>
    <Box sx={styles.mainWrapper}> 
    <Box sx={{width: "5px", height:"100%", backgroundColor: "#b3b3b3"}}>
      {comment.replies.map((reply) => (
        <ReplyItem key={reply.id} id={reply.id} replyDetails={reply.content} />
      ))}
      </Box> 
      </Box>
    </>
  );
};

export default ReplyList;
