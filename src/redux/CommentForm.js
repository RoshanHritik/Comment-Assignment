import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';

const CommentForm = ({ addComment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      // Construct the comment object from the form data
      // userId, content, user, parentCommentId, mentionedUsers, etc.
    };
    addComment(comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Submit Comment</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
