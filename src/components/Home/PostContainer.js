import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoIcon from "@material-ui/icons/Photo";
import MovieIcon from "@material-ui/icons/Movie";
import EventIcon from "@material-ui/icons/Event";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import Post from "./Post";
import ModalForm from "./ModalForm";
import { postDetails, selectPost } from "../../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
const PostContainer = () => {
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();
  const [formToggle, setFormToggle] = useState(false);
  console.log("====================================");
  console.log(posts[0]);
  console.log("====================================");

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      let tempPost = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(postDetails(tempPost));
    });
  }, []);

  return (
    <Main>
      <MainContent>
        <PostForm onClick={() => setFormToggle(true)}>
          <Form>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA" />
            <button onClick={() => setFormToggle(true)}>Start a post</button>
          </Form>
          <Icons>
            <Icon>
              <PhotosIcon />
              <span>Photo</span>
            </Icon>
            <Icon>
              <MoviesIcon />
              <span>video</span>
            </Icon>
            <Icon>
              <EventsIcon />
              <span>Events</span>
            </Icon>
            <Icon>
              <ArticleIcon />
              <span>Articles</span>
            </Icon>
          </Icons>
        </PostForm>
        {posts.map((post) => (
          <PostContent>
            <Post
              username="sarang"
              mail="mailid"
              time="time"
              description={post?.description}
              image={post?.image}
              video={post?.video}
            />
          </PostContent>
        ))}
      </MainContent>
      {formToggle && <ModalForm setFormToggle={setFormToggle} />}
    </Main>
  );
};

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContent = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: #fff;
`;

export const PostForm = styled.div`
  background-color: white;
  border-radius: 10px;
`;

export const PhotosIcon = styled(PhotoIcon)`
  color: lightblue; ;
`;
export const MoviesIcon = styled(MovieIcon)`
  color: green;
`;
export const EventsIcon = styled(EventIcon)`
  color: orange;
`;
export const ArticleIcon = styled(FormatAlignJustifyIcon)`
  color: #e48595;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  span {
    font-size: 16px;
    text-transform: capitalize;
    color: #474747;
  }
  &:hover {
    background-color: lightgrey;
  }
`;
export const Icons = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Form = styled.div`
  padding-top: 10px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  img {
    border-radius: 50px;
    width: 50px;
  }
  button {
    width: 100%;
    border-radius: 50px;
    border: 1px solid lightgray;
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    text-align: left;
    font-size: 15px;
    color: #575454;
    background: transparent;
    &:hover {
      background: lightgray;
    }
  }
`;
export const Main = styled.div``;

export default PostContainer;
