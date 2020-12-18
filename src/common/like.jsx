import React from 'react';

const Like = (props) => {
  const { like, onClick } = props;
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
