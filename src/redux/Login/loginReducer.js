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