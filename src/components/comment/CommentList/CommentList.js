import Box from '@mui/material/Box';
import style from './CommentList.style';
import CommentItem from '../CommentItem/CommentItem';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const CommentList = () => {
  const [comments, setComments] = useState(null);
  const [setError] = useState(null);
  const parts = window.location.pathname.split('/');
  const sportName = parts[parts.length - 1];
  localStorage.setItem('sportName', sportName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8002/comments/sport-name/${sportName}`;
        const response = await axios.get(url);
        setComments(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <Box sx={style.mainWrapper}>
        {comments?.map((comment) => (
          <CommentItem
            key={comment.id}
            id={comment.id}
            commentDetails={comment.content}
            upvotes={comment.upvotes}
            downvotes={comment.downvotes}
            name={comment.user.name}
            email={comment.user.email}
            picture={comment.user.picture}
            timestamp={comment.timestamp}
            replies={comment.replies}
          />
        ))}
      </Box>
    </>
  );
};

export default CommentList;
