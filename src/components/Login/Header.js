import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSection>
      <LogoSection>
        <Logo src="images/login-logo.svg" />
      </LogoSection>
      <LoginSection>
        <JoinButton> Join now</JoinButton>
        <SignIn>Sign in</SignIn>
      </LoginSection>
    </HeaderSection>
  );
};

export const JoinButton = styled.button`
  margin-right: 12px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  padding: 0 12px 0 12px;
  height: 40px;
  font-size: 16px;
  transition: all 0.25s ease-out;
  text-decoration: none solid rgba(0, 0, 0, 0.9);
  cursor: pointer;
  color: gray;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;
export const SignIn = styled.button`
  border-radius: 24px;
  padding: 0 24px 0 24px;
  height: 40px;
  border-color: rgb(10, 102, 194);
  background-color: #fff;
  color: #0a66c2;
  font-weight: 600;
  font-size: 16px;
  border-width: 0.5px;
  transition: all 0.15s ease;

  &:hover {
    background-color: #c6e5f0;
    box-shadow: rgb(10, 102, 194) 0 0 0 1px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100%;
`;

export const HeaderSection = styled.div`
  max-width: 1128px;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const LogoSection = styled.div`
  max-width: 150px;
  height: 34px;
`;
export const LoginSection = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
