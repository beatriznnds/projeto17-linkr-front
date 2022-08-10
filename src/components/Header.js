import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useUserData,
  deleteUserDataInLocalStorage,
} from "../contexts/UserDataContext";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export default function Top() {
  const [{ name, profilePic, token }, setUserData] = useUserData();
  const [menuDisplay, setMenuDisplay] = React.useState(false);
  const navigate = useNavigate();

  function checkMenu() {
    if (menuDisplay) {
      setMenuDisplay(false);
    }
  }
  function menu() {
    if (menuDisplay) {
      setMenuDisplay(false);
    } else {
      setMenuDisplay(true);
    }
  }

  function logout() {
    setUserData(null);
    deleteUserDataInLocalStorage();
    navigate("/");
  }

  return (
    <Container>
      <Header onClick={checkMenu}>
        <h1>linkr</h1>
        <Avatar onClick={menu}>
          {menuDisplay ? (
            <AiOutlineUp color="white" size="26px" />
          ) : (
            <AiOutlineDown color="white" size="26px" />
          )}
          <img
            src="http://pm1.narvii.com/6422/616d22cc4500a5e6b4386304ccbe26ada6e46b1a_00.jpg"
            alt="user"
          />
        </Avatar>
      </Header>
      {menuDisplay ? (
        <Logout>
          <div onClick={logout}>
            <span>Logout</span>
          </div>
        </Logout>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 72px;
  width: 100%;
  background-color: #151515;
  position: fixed;
  top: 0;
  z-index: 1;

  h1 {
    font-family: "Passion One", cursive;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    color: #ffffff;
  }

  img {
    width: 53px;
    height: 53px;
    object-fit: cover;
    border-radius: 26.5px;
  }
`;

const Avatar = styled.div`
  display: flex;
  width: 86px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 100%;
`;

const Logout = styled.div`
  height: 40px;
  width: 120px;
  position: fixed;
  right: 0;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171717;

  span {
    color: #ffffff;
    size: 17px;
    cursor: pointer;
  }
`;
