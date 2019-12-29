import styled from "styled-components";

const PostContainer = styled.div`
  & p {
    color: ${props => props.color};
  }
`;

export default PostContainer;
