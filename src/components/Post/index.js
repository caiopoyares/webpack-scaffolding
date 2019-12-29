import React from "react";
import PostHeader from "../PostHeader/index.js";
import PropTypes from "prop-types";
import PostContainer from "./style";

const Post = ({ posts }) => {
  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <PostContainer color="grey" className="single-post" key={index}>
          <PostHeader
            imageUrl={post.imageUrl}
            author={post.author}
            time={post.time}
          />
          <p className="description">{post.description}</p>
        </PostContainer>
      ))}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
