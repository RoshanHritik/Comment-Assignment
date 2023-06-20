const initialState = {
    comments: [],
};
  
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const ADD_REPLY = 'ADD_REPLY';
const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
  });
  
  const editComment = (commentId, updatedContent) => ({
    type: EDIT_COMMENT,
    payload: { commentId, updatedContent },
  });
  
  const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId,
  });
  
  const addReply = (parentId, reply) => ({
    type: ADD_REPLY,
    payload: { parentId, reply },
  });
  
  const upvoteComment = (commentId) => ({
    type: UPVOTE_COMMENT,
    payload: commentId,
  });
  
  const downvoteComment = (commentId) => ({
    type: DOWNVOTE_COMMENT,
    payload: commentId,
  });

  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMMENT:
        return {
          ...state,
          comments: [...state.comments, action.payload],
        };
      case EDIT_COMMENT:
        return {
          ...state,
          comments: state.comments.map((comment) => {
            if (comment._id === action.payload.commentId) {
              return {
                ...comment,
                content: action.payload.updatedContent,
              };
            }
            return comment;
          }),
        };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter(
            (comment) => comment._id !== action.payload
          ),
        };
      case ADD_REPLY:
        return {
          ...state,
          comments: state.comments.map((comment) => {
            if (comment._id === action.payload.parentId) {
              return {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              };
            }
            return comment;
          }),
        };
      case UPVOTE_COMMENT:
        return {
          ...state,
          comments: state.comments.map((comment) => {
            if (comment._id === action.payload) {
              return {
                ...comment,
                upvotes: comment.upvotes + 1,
              };
            }
            return comment;
          }),
        };
      case DOWNVOTE_COMMENT:
        return {
          ...state,
          comments: state.comments.map((comment) => {
            if (comment._id === action.payload) {
              return {
                ...comment,
                downvotes: comment.downvotes + 1,
              };
            }
            return comment;
          }),
        };
      default:
        return state;
    }
  };


  const { createStore } = Redux;
const store = createStore(commentReducer);