import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { TextareaAutosize } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import style from './CommentBox.style';
import SendButton from 'custom-button-comment';
import axios from 'axios';

const CommentBox = () => {
  const [commentText, setCommentText] = useState('');
  const commentInputRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const sportName = localStorage.getItem('sportName');
  const handleAddComment = async (event) => {
    event.preventDefault();
    if (commentText.trim().length === 0) {
      alert('Enter a task before adding !!');
      setCommentText('');
      return;
    }
    try {
      const url = `http://localhost:8002/comments/sport`;
      const requestBody = {
        id: uuidv4(),
        content: commentText,
        user: {
          name: user.name,
          email: user.email,
          picture: user.picture,
        },
        sport: sportName,
      };
      const response = await axios.post(url, requestBody);
      console.log(response.data);
    } catch (error) {
      console.error('Error while upvoting:', error.message);
    }
    setCommentText('');
  };
  return (
    <>
      <Box sx={style.mainWrapper}>
        <Box>
          <Paper sx={style.commentBoxWrapper}>
            <Box>
              <Avatar src={user.picture} alt='Profile Image' />
            </Box>
            <Box>
              <TextareaAutosize
                id='demo-helper-text-aligned-no-helper'
                placeholder='Add a comment...'
                style={{
                  width: '420px',
                  minWidth: '420px',
                  height: '80px',
                  maxWidth: '420px',
                  maxHeight: '80px',
                  minHeight: '80px',
                }}
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                ref={commentInputRef}
              />
            </Box>
            <Box>
              <SendButton
                style={{ backgroundColor: '#4636b0' }}
                handleOnClick={handleAddComment}
                name='Send'
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default CommentBox;
