import React from "react";
import PostHeader from "./PostHeader.js";
import PropTypes from "prop-types";

const Post = ({ posts }) => {
  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <div className="single-post" key={index}>
          <PostHeader
            imageUrl={post.imageUrl}
            author={post.author}
            time={post.time}
          />
          <p className="description">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
