import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import style from './ReplyBox.style';
import axios from 'axios';

const ReplyBox = (activeCommentId) => {
  const [replyText, setReplyText] = useState('');
  const replyInputRef = useRef(null);
  const [replyBoxVisible, setReplyBoxVisible] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleAddReply = async (event) => {
    event.preventDefault();

    if (replyText.trim().length === 0) {
      alert('Enter a reply before adding!!');
      setReplyText('');
      return;
    }
    try {
      const url = `http://localhost:8002/comments/${activeCommentId.activeCommentId}/replies`;
      console.log(activeCommentId.activeCommentId);
      const requestBody = {
        id: uuidv4(),
        content: replyText,
        user: {
          name: user.name,
          email: user.email,
          picture: user.picture,
        },
        parentId: activeCommentId.activeCommentId,
      };
      console.log('hello');
      const response = await axios.put(url, requestBody);
      console.log(response.data);
    } catch (error) {
      console.error('Error while upvoting:', error.message);
    }
    setReplyText('');
    setReplyBoxVisible(false);
  };
  return (
    <>
      {replyBoxVisible && (
        <Box sx={style.mainWrapper}>
          <Box>
            <Paper sx={style.commentBoxWrapper}>
              <Box>
                <Avatar src={user.picture} alt='Profile Image' />
              </Box>
              <Box>
                <TextareaAutosize
                  helperText=' '
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
                  value={replyText}
                  onChange={(event) => setReplyText(event.target.value)}
                  ref={replyInputRef}
                />
              </Box>
              <Box>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#4636b0' }}
                  onClick={handleAddReply}
                >
                  Send
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ReplyBox;
