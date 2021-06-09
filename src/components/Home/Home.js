import React from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import MainContainer from "./MainContainer";

const Home = () => {
  return (
    <Main>
      <HomeHeader />
      <MainContainer />
    </Main>
  );
};

export const Main = styled.div`
  background-color: #f3f2ef;
  flex-wrap: wrap;
  min-height: 100vh;
`;

export default Home;
