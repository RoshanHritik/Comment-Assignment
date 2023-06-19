export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_REPLY = 'ADD_REPLY';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addReply = (commentId, reply) => ({
  type: ADD_REPLY,
  payload: { commentId, reply },
});