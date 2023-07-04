import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./CommentItem.style";
import axios from "axios";
import ReplyBox from "../ReplyBox/ReplyBox";
import ReplyList from "../ReplyList/ReplyList";

const CommentItem = ({ id, commentDetails, upvotes, email, downvotes, name, picture, replies}) => {
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [replyBoxVisible, setReplyBoxVisible] = useState(false);
  const [count, setCount] = useState(upvotes.length - downvotes.length);
  const button = 1;
  const handleUpvote = async (id) => {
    try {
      const url = `http://localhost:8002/comments/sport/${id}`;
      const requestBody = {
          "operation": "like",
          "email": email,
      };
      const response = await axios.put(url, requestBody);
      setCount(response.data.upvotes.length - response.data.downvotes.length);
        console.log('Upvotes:', response);
    } catch (error) {
      console.error('Error while upvoting:', error.message);
    }
  };

  const handleDownvote = async (id) => {
    try {
      const url = `http://localhost:8002/comments/sport/${id}`;
      const requestBody = {
          "operation": "dislike",
          "email": email,
      };
      const response = await axios.put(url, requestBody);
      setCount(response.data.upvotes.length - response.data.downvotes.length);
    } catch (error) {
      console.error('Error while downvoting:', error.message);
    }
  };
  const toggleReplyBox = () => {
    setActiveCommentId(id);
    setReplyBoxVisible(!replyBoxVisible);
  };
  console.log(replies);
  return (
    <>
      <Box marginTop={"20px"}>
        <Paper
          key={id}
          elevation={3}
          sx={style.mainWrapper}
        >
          <Box display="flex" alignItems="center">
            <Box
              sx={style.commentItemWrapper}
            >
              <IconButton
                size="small"
                aria-label="Add"
                color="#4636b0"
                onClick= {() => handleUpvote(id)}
              >
                <AddIcon style={{ color: "#4636b0" }} />
              </IconButton>
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: "#4636b0" }}
              >
                {count}
              </Typography>
              <IconButton
                size="small"
                aria-label="Subtract"
                color="#4636b0"
                onClick={() => handleDownvote(id)}
              >
                <RemoveIcon
                  style={{ color: "#4636b0", marginBottom: "20px" }}
                />
              </IconButton>
            </Box>
            <Box fontStyle="inherit" marginLeft={"25px"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={picture}
                    alt="Profile Image"
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    fontSize={"16px"}
                    marginLeft={"20px"}
                    fontWeight={"bold"}
                  >
                    {name.split(' ')[0].toLowerCase()}
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
                    timestamp
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    
                  }}
                >
                  {button !== 0 ? (
                    <Box paddingLeft={"220px"}>
                      <IconButton
                        size="small"
                        aria-label="Reply"
                        onClick={toggleReplyBox}
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
                    <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "170px" }}>
                      <IconButton size="small">
                        <DeleteIcon
                          style={{
                            color: "#c94f4f",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        <Typography
                          variant="subtitle1"
                          fontWeight={"bold"}
                          fontSize={"16px"}
                          component="span"
                          style={{ color: "#c94f4f" }}
                          onClick={() => {}}
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
        </Paper>
      </Box>
      {replies &&
        <ReplyList activeCommentId={activeCommentId} replies={replies} />
      }
      {activeCommentId === id && replyBoxVisible && (
        <>
          <ReplyBox
            toggleReplyBox={toggleReplyBox}
            activeCommentId={activeCommentId}
            parentId={activeCommentId}
          />
          
        </>
      )}
    </>
  );
};

export default CommentItem;
