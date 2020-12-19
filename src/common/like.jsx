import React from 'react';

const Like = ({ like, onClick }) => {
  let classes = 'fa fa-heart';

  if (!like) {
    classes += '-o';
  }

  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    ></i>
  );
};

export default Like;
