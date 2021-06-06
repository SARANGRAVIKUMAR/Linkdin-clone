import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeading>Welcome to your professional community</HeroHeading>
      <Img src="images/login-hero.svg" />
      <HeroList>
        <HeroListContent>Search For a job </HeroListContent>
        <HeroListContent>Find a person you know</HeroListContent>
        <HeroListContent>Learn a new skill</HeroListContent>
      </HeroList>
    </HeroContainer>
  );
};
export const Img = styled.img`
  margin-left: auto;
  position: absolute;
  right: 150px;
  top: 200px;
  z-index: -1;
  width: 700px;
  height: 700px;
`;
export const HeroListContent = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 20px;
  border: 1px solid gray;
  height: 60px;
  padding-top: 20px;
  width: 408px;
  border-radius: 5px;
  border-color: whitesmoke;
  transition: all 0.25 ease-in;
  border: 0.2px solid lightgrey;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 6px 0px;
  }
  ::after {
    content: ">";
    position: absolute;
    right: 20px;
    color: gray;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 56px;
  font-weight: 400;
  line-height: 70px;
  color: #2977c9;
  max-width: 700px;
`;
export const HeroList = styled.ul`
  padding-top: 100px;
`;
export const HeroContainer = styled.div`
  padding: 200px 0px 138px 0;
  max-width: 1128px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export default HeroSection;
