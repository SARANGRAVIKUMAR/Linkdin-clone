import React, { useState } from "react";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const Post = ({ username, mail, time, description, image }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <PostContainer>
      <PostUserDetails>
        <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GgYu5dL-VHzVWzJzSXZKoDy9FTAQzFkw1rh-fQZ_A=s96-c" />
        <UserDetails>
          <Username>{username}</Username>
          <Userid>{mail}</Userid>
          <Usertime>{time}</Usertime>
        </UserDetails>
      </PostUserDetails>
      <PostDescription>
        {isReadMore ? (description) : description?.slice(0, 100)}
        {description?.length > 100 && (
          <span onClick={() => setIsReadMore(!isReadMore)}>
            {isReadMore ? " ...read less" : " ...read more"}
          </span>
        )}
      </PostDescription>
      <PostImage>
        <img src={image} />
      </PostImage>

      <CountSection>
        <Likes />
        <span> 0 likes</span>
        <span>0 comments</span>
      </CountSection>
      <hr />
      <Icons>
        <Like>
          <ThumbUpAltOutlinedIcon />
          <span>Like</span>
        </Like>

        <Comment>
          <CommentOutlinedIcon />
          <span>Comment</span>
        </Comment>

        <Share>
          <ShareOutlinedIcon />
          <span>Share</span>
        </Share>
      </Icons>
    </PostContainer>
  );
};
export const Icons = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Like = styled.div`
  padding-right: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${ThumbUpAltOutlinedIcon} {
    color: gray;
  }
`;
export const Comment = styled.div`
  padding-right: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  ${CommentOutlinedIcon} {
    color: gray;
  }
`;

export const Share = styled.div`
  padding-right: 10px;
  display: flex;
  cursor: pointer;
  align-items: center;
  ${ShareOutlinedIcon} {
    color: gray;
  }
`;

export const CountSection = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    padding-right: 10px;
    font-size: 12px;
    color: #4b4a4a;
  }
`;

export const Likes = styled(ThumbUpAltIcon)`
  color: #0a66c2;
  padding-left: 5px;
`;

export const PostImage = styled.div`
  padding-top: 20px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
export const PostDescription = styled.h4`
  padding-left: 20px;
  padding-top: 10px;
  word-wrap: break-word;
  font-weight: normal;
  font-size: 14px;
  span {
    color: gray;
    cursor: pointer;
    &:hover {
      color: #0a66c2;
      text-decoration: underline;
    }
  }
`;

export const Username = styled.h2`
  font-weight: 600;
  line-height: 20px;
  font-size: 15px;
  &:hover {
    color: #0a66c2;
    text-decoration: underline;
  }
`;
export const Userid = styled.h2`
  font-size: 12px;
  color: gray;
`;
export const Usertime = styled(Userid)``;
export const PostContainer = styled.div`
  max-width: 540px;
  hr {
    border: 0.5px solid whitesmoke;
  }
`;
export const PostUserDetails = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
export const UserImg = styled.img`
  width: 50px;
`;
export const UserDetails = styled.div`
  padding-left: 10px;
`;

export default Post;
