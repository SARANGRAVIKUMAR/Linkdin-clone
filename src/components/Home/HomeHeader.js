import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HomeHeader = () => {
  const menuref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  console.log(menuref);

  const handleClick = (e) => {
    if (menuref.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLeft>
          <Logo src="/images/home-logo.svg" />
          <div>
            <SearchIcon src="images/search-icon.svg" />
            <input type="text" placeholder="search" />
          </div>
        </HeaderLeft>
        <HeaderRight>
          <NavMenu>
            <Icon src="images/nav-home.svg" />
            <span>Home</span>
          </NavMenu>
          <NavMenu>
            <Icon src="images/nav-network.svg" />
            <span>My network</span>
          </NavMenu>
          <NavMenu>
            <Icon src="images/nav-jobs.svg" />
            <span>Jobs</span>
          </NavMenu>
          <NavMenu>
            <Icon src="images/nav-messaging.svg" />
            <span>Messaging</span>
          </NavMenu>
          <NavMenu>
            <Icon src="images/nav-notifications.svg" />
            <span>notifications</span>
          </NavMenu>
          <NavMenu>
            <User ref={menuref} onClick={() => setIsOpen(!isOpen)}>
              <UserImg>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA" />
              </UserImg>
              <Usertitle>
                <span>Me</span>
                <img src="/images/down-icon.svg" />
              </Usertitle>
              {isOpen && (
                <UserDropDown>
                  <UserDetails>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEp7EKFR2h0MQ/profile-displayphoto-shrink_100_100/0/1602657165540?e=1628726400&v=beta&t=YIpi102uzXGqMAfWDggO_0CHnWtb9BP6Hmthrw1IIgA" />
                    <Userdesc>
                      <UserName>Sarang Ravikumar</UserName>
                      <UseDescription>Student at toch institure</UseDescription>
                    </Userdesc>
                  </UserDetails>
                  <button>view profile</button>
                  <hr />
                  <UserDropContent>
                    <ContentHeading>Account</ContentHeading>
                    <ContentList>Setting and privacy </ContentList>
                    <ContentList>help</ContentList>
                    <ContentList>language</ContentList>
                    <hr />
                    <ContentHeading>manage</ContentHeading>
                    <ContentList>post and activity </ContentList>
                    <ContentList>job posting account</ContentList>
                  </UserDropContent>
                </UserDropDown>
              )}
            </User>
          </NavMenu>
          <NavMenu>
            <Work>
              <img src="images/nav-work.svg" />
              <Worktitle>
                <span>Work</span>
                <img src="images/down-icon.svg" />
              </Worktitle>
            </Work>
          </NavMenu>
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  );
};
export const UserDropContent = styled.div`
  padding-left: 10px;
  padding-top: 5px;
`;
export const ContentHeading = styled.h3`
  padding-bottom: 8px;
  text-transform: capitalize;
`;
export const ContentList = styled.li`
  list-style: none;
  font-weight: 300;
  color: gray;
  font-size: 15px;
  text-transform: capitalize;
  padding-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Userdesc = styled.div``;
export const UseDescription = styled.h3`
  font-weight: 400;
  font-size: 16px;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 56px;
    width: 56px;
    object-fit: contain;
    border-radius: 50px;
    padding-right: 10px;
  }
`;
export const UserName = styled.h3`
  text-transform: uppercase;
`;

export const UserDropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  border: none;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 264px;
  box-shadow: 3px 5px 10px 0px rgba(41, 50, 50, 0.37);

  button {
    width: 100%;
    margin-top: 20px;
    color: #0a66c2;
    border-color: #0a66c2;
    border-radius: 50px;
    background: transparent;
    padding: 2px 12px;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #c6e5f0;
      box-shadow: rgb(10, 102, 194) 0 0 0 1px;
    }
  }
  hr {
    border: 0.5px solid whitesmoke;
    margin-top: 10px;
  }
`;
export const Work = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Worktitle = styled.div`
  display: flex;
`;

export const User = styled.div`
  position: relative;
  padding-right: 30px;
  border-right: 0.5px solid lightgrey;
`;

export const UserImg = styled.div`
  border-radius: 50%;
  img {
    height: 25px;
    width: 25px;
    border-radius: 50px;
  }
`;

export const Usertitle = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchIcon = styled.img`
  position: absolute;
  top: 15px;
  padding-left: 10px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
  position: relative;
  cursor: pointer;
  span {
    font-size: 11px;
    font-weight: 400;
    color: gray;
    text-transform: capitalize;
    transition: all 0.25s ease;
    &:hover {
      color: black;
    }
  }
`;
export const Icon = styled.img`
  width: 25px;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  padding-right: 10px;
`;
export const HeaderNav = styled.div`
  display: flex;
  max-width: 1128px;
  margin: 0 auto;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  div {
    position: relative;
    border-radius: 4px;
    background-color: #eef3f8;
    input {
      background: transparent;
      outline: none;
      border: none;
      padding: 14px;
      padding-left: 30px;
      transition: all 0.15s ease-in;
      &:focus {
        width: 300px;
        font-size: 16px;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 10px;
`;

export default HomeHeader;
