import Box from "@mui/material/Box";
import ReplyItem from "../ReplyItem/ReplyItem";
import styles from "./ReplyList.style.js";


const ReplyList = ({ replies }) => {
    if (!replies) {
      return null;
    }
  return (
    <>
    <Box sx={styles.mainWrapper}> 
    <Box sx={{width: "5px", height:"100%", backgroundColor: "#b3b3b3"}}>
      {replies.map((reply) => (
        <ReplyItem key={reply.id} id={reply.id} replyDetails={reply.content} parentId={reply.parentId}
        votes={reply.votes}
        name={reply.user.name} picture={reply.user.picture} timestamp={reply.timestamp} />
      ))}
      </Box> 
      </Box>
    </>
  );
};

export default ReplyList;
