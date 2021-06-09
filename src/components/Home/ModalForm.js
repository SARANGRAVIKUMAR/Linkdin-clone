import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import MovieIcon from "@material-ui/icons/Movie";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { postDetails } from "../../features/postSlice";
import db from "../../firebase";

const ModalForm = ({ setFormToggle }) => {
  const dispatch = useDispatch();

  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [input, setInput] = useState("");
  const [imageToggle, setImageToggle] = useState(false);
  const [textDisplay, setTextDisplay] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`is not a image the file is ${typeof image}`);
      return;
    } else {
      setShareImage(URL.createObjectURL(image));
    }
  };

  const menuref = useRef();
  const handleClick = (e) => {
    if (menuref.current.contains(e.target)) {
      return;
    }
    setFormToggle(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      description: input,
      image: shareImage,
      video: videoLink,
    });
    setInput("");
    setShareImage("");
    setVideoLink("");
    setFormToggle(false);
  };

  return (
    <Container>
      <FormContent onSubmit={handleSubmit} ref={menuref}>
        <ModalHeading>
          <HeadingName>Create a Post</HeadingName>
          <IconButton onClick={() => setFormToggle(false)}>
            <CloseIcon />
          </IconButton>
        </ModalHeading>
        <hr />
        <User>
          <Userimg src="https://lh3.googleusercontent.com/a-/AOh14GgYu5dL-VHzVWzJzSXZKoDy9FTAQzFkw1rh-fQZ_A=s96-c" />
          <Username>Sarang Ravikumar</Username>
        </User>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="What do you want to talk about"
        />
        {textDisplay && (
          <UploadImage>
            {imageToggle && (
              <>
                <input
                  type="file"
                  accept="image/gif,image/jpeg, image/png"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <p>
                  <label htmlFor="file">Select a image</label>
                </p>
                {shareImage && <img src={shareImage} />}
              </>
            )}
            {!imageToggle && (
              <>
                <input
                  type="text"
                  placeholder="input a video url"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    marginLeft: "-90px",
                  }}
                />
                {videoLink && (
                  <>
                    <ReactPlayer width={"100%"} url={videoLink} />
                  </>
                )}
              </>
            )}
          </UploadImage>
        )}

        <Bottom>
          <Icons onClick={() => setTextDisplay(true)}>
            <Photo onClick={() => setImageToggle(true)} />
            <Movie onClick={() => setImageToggle(false)} />
          </Icons>
          <Button disabled={!input} type="submit">
            Post
          </Button>
        </Bottom>
      </FormContent>
    </Container>
  );
};

export const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
export const Button = styled.button`
  border-radius: 50px;
  padding: 10px 20px;
  background: #297dd1;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #000061;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 10px;
`;

export const Icons = styled.div`
  color: gray;
  display: flex;
  align-items: center;
`;
export const Photo = styled(PhotoIcon)`
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #c8c5c5;
  }
`;
export const Movie = styled(MovieIcon)`
  margin-left: 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #c8c5c5;
  }
`;

export const HeadingName = styled.h2`
  padding-top: 5px;
  font-size: 22px;
  font-weight: 400;
`;

export const Username = styled.h3`
  padding-left: 10px;
  text-transform: capitalize;
`;

export const Userimg = styled.img`
  border-radius: 50px;
  width: 50px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 22px;
  padding: 20px;
  line-height: 28px;
  font-weight: 300;
`;

export const FormContent = styled.form`
  hr {
    border: 1px solid whitesmoke;
  }
  position: relative;
  margin: 0 auto;
  margin-top: 120px;
  max-width: 550px;
  background-color: #fff;
  border-radius: 6px;
  input {
    outline: none;
    margin: 20px;
    width: 400px;
    border: none;
    background: transparent;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  z-index: 999;
`;

export default ModalForm;
