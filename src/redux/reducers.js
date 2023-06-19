// reducers.js

import { ADD_COMMENT, ADD_REPLY } from './actions';

const initialState = {
  comments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case ADD_REPLY:
      const { commentId, reply } = action.payload;
      const updatedComments = state.comments.map((comment) => {
        if (comment.userId === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        }
        return comment;
      });
      return {
        ...state,
        comments: updatedComments,
      };
    default:
      return state;
  }
};

export default rootReducer;
