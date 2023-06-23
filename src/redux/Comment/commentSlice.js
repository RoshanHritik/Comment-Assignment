import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // addComment: (state, action) => {
    //   state.comments.push(action.payload);
    // },
    addComment: (state, action) => {
      const newComment = {
        id: uuidv4(),
        content: "",
        user: {
          name: "",
          email: "",
          picture: "",
        },
        mentionedUsers: [],
        replies: [],
        votes: 0,
        sport: "",
        timestamp: "",
        updatedAt: "",
      };
      // state.comments.push(newComment);
      // state.comments.push(action.payload);
      const commentData = { ...newComment, ...action.payload };
      state.comments.push(commentData);
    },
    editComment: (state, action) => {
      const { commentId, updatedContent } = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.content = updatedContent;
      }
    },
    deleteComment: (state, action) => {
      console.log(action);
      console.log(state.comments);
      const commentId = action.payload;
      state.comments = state.comments.filter((c) => c.id !== commentId);
    },
    // addReply: (state, action) => {
    //   const newReply = {
    //     id: uuidv4(),
    // content: "",
    // user: {
    //   name: "",
    //   email: "",
    //   picture: "",
    // },
    //     mentionedUsers: [],
    //     votes: 0,
    //     sports: "",
    //     createdAt: "",
    //     updatedAt: "",
    //   };
    //   const { parentId, reply } = action.payload;
    //   const comment = state.comments.find((c) => c.id === parentId);
    //   if (comment) {
    //     comment.replies.push(reply);
    //   }
    // },
    addReply: (state, action) => {
      const { commentId, reply } = action.payload;
      state.comments = state.comments.map((comment) => {
        // console.log(comment);
        if (comment.id === commentId) {
          const newReply = {
            id: uuidv4(),
            content: "",
            user: {
              name: "",
              email: "",
              picture: "",
            },
            mentionedUsers: [],
            votes: 0,
            createdAt: "",
            updatedAt: "",
            ...reply,
          };
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      });
    },
    

    upvoteComment: (state, action) => {
      const commentId = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.votes++;
      }
    },
    downvoteComment: (state, action) => {
      const commentId = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.votes--;
      }
    },
    deleteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.replies = comment.replies.filter((r) => r.id !== replyId);
      }
    },
    editReply: (state, action) => {
      const { commentId, replyId, updatedContent } = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        const reply = comment.replies.find((r) => r.id === replyId);
        if (reply) {
          reply.content = updatedContent;
        }
      }
    },
    upvoteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        const reply = comment.replies.find((r) => r.id === replyId);
        if (reply) {
          reply.votes++;
        }
      }
    },
    downvoteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find((c) => c.id === commentId);
      if (comment) {
        const reply = comment.replies.find((r) => r.id === replyId);
        if (reply) {
          reply.votes--;
        }
      }
    },
  },
});

export const {
  addComment,
  editComment,
  deleteComment,
  addReply,
  upvoteComment,
  downvoteComment,
  deleteReply,
  editReply,
  upvoteReply,
  downvoteReply,
} = commentSlice.actions;

export default commentSlice.reducer;
