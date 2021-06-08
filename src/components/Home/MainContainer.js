import React from "react";
import styled from "styled-components";
import PostContainer from "./PostContainer";

const MainContainer = () => {
  return (
    <Container>
      <ContainerLeft>
        <Image src="images/card-bg.svg" />
        <UserImg src="https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA" />
        <User>
          <UserName>Sarang Ravikumar</UserName>
          <Userdesc>Student at toch institute of technology</Userdesc>
        </User>
        <hr />
        <Profile>
          <h4>
            Who viewed your profile <a>8</a>
          </h4>
          <span>
            Connections <a>112</a>
            <h5>grow your network</h5>
          </span>
        </Profile>
        <hr />
        <Item>
          <img src="images/item-icon.svg" />
          <span>My Items</span>
        </Item>
      </ContainerLeft>
      <ContainerMain>
        <PostContainer />
      </ContainerMain>
      <ContainerRight>
        <News>
          <NewsHeading>Linkdin News</NewsHeading>
          <NewsList>Lorem ipsum dolor sit amet.</NewsList>
          <NewsList>Lorem ipsum dolor sit amet.</NewsList>
          <NewsList>Lorem ipsum dolor sit amet.</NewsList>
          <NewsList>Lorem ipsum dolor sit amet.</NewsList>
        </News>
      </ContainerRight>
    </Container>
  );
};
export const News = styled.div`
  padding: 20px;
`;
export const NewsHeading = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;
export const NewsList = styled.li`
  padding-top: 15px;
  font-size: 14px;
  font-weight: 400;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  color: #444141;
  img {
    padding-right: 5px;
    padding-left: 10px;
  }
`;

export const Profile = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 30px;
  h4 {
    color: #575555;
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    padding-bottom: 10px;
    a {
      color: #0a66c2;
      padding-left: 30px;
    }
    &:hover {
      background-color: lightgray;
    }
  }
  span {
    font-size: 13px;
    color: #575555;
    line-height: 16px;
    a {
      color: #0a66c2;
      padding-left: 100px;
    }
    h5 {
      font-weight: 600;
      color: black;
      font-size: 13px;
      text-transform: capitalize;
    }
  }
`;
export const User = styled.div`
  word-wrap: break-word;
  padding: 25px;
`;
export const UserName = styled.h3`
  padding-top: 10px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;
export const Userdesc = styled.h4`
  font-size: 12px;
  color: gray;
  padding-top: 6px;
  font-weight: 400;
  text-align: center;
`;

export const Image = styled.img`
  width: 223px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const UserImg = styled.img`
  position: absolute;
  right: 85px;
  top: 20px;
  width: 60px;
  border-radius: 50px;
`;

export const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;
export const ContainerLeft = styled.div`
  top: 90px;
  margin-right: 10px;
  border: 1px solid lightgray;
  position: relative;
  width: 225px;
  height: 320px;
  background-color: #fff;
  position: sticky;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  hr {
    border: 0.5px solid whitesmoke;
  }
`;
export const ContainerMain = styled.div`
  min-width: 500px;
  word-wrap: wrap;
`;
export const ContainerRight = styled.div`
  border: 1px solid lightgray;
  position: sticky;
  top: 90px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 10px;
  min-width: 250px;
  height: 200px;
  overflow: hidden;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

export default MainContainer;
