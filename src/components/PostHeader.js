import React from "react";
import PropTypes from "prop-types";

const PostHeader = ({ imageUrl, author, time }) => {
  return (
    <div className="postheader-master">
      <div>
        <img src={imageUrl} alt={`Image from ${author}`} />
      </div>
      <div>
        <p className="author">
          <strong>{author}</strong>
        </p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
