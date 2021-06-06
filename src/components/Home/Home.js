import React from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <Main>
      <HomeHeader />
    </Main>
  );
};

export const Main = styled.div`
  background-color: #f3f2ef;
  height: 100vh;
`;

export default Home;
