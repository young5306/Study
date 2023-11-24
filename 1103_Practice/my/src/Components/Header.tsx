//npm install react-router-dom
//npm install --save @types/react-router-dom //오류 뜸 -> 삭제 (types는 업데이트 안돼서 최신 기능의 RRD에 대한 타입 정의 없기 때문에 에러 뜸)
//index.tsx에 BrowserRouter import, Router로 App 감싸기
import React, { useState } from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./../Pages/home";
import About from "./../Pages/about";
import Contact from "./../Pages/contact";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isToggled, setIsToggled] = useState<boolean>(true);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <HeaderStyle>
        <Logo style={{ margin: "10px" }}>
          <img src={require("./../Images/profile1.jpg")} alt="profile"></img>
          <div>사용자</div>
        </Logo>
        <Menu isToggled={isToggled}>
          <p className="btn" onClick={onClick}>
            <GiHamburgerMenu style={{ color: "white" }} />
          </p>
          <ul className="menuUl">
            <li className="menu">
              <Link to="/home">Home</Link>
            </li>
            <li className="menu">
              <Link to="/about">About</Link>
            </li>
            <li className="menu">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Menu>
      </HeaderStyle>
    </>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  font-size: 18px;
  font-weight: bold;
`;
const Menu = styled.div<{ isToggled: boolean }>`
  ul {
    list-style: none;
    display: flex;
    padding: 0;

    //border-radius: 5px;
  }
  .menuUl {
    background-color: black;
    margin-top: 0;
  }
  .menu {
    width: 80px;
    height: 50px;
    padding: 10px;
  }
  a {
    //Link -> a ??
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 80px;
    height: 50px;
    line-height: 50px;
    color: white; //??
    &:hover {
      background-color: #555;
    }
    transition: background-color 0.3s ease;
  }
  .btn {
    display: none;
  }

  @media (max-width: 767px) {
    .menuUl {
      width: 100%;
      flex-direction: column;
      margin-top: 0;
    }
    .menu {
      display: ${(props) => (props.isToggled ? "block" : "none")};
    }
    .btn {
      display: block;
      background-color: black;
      padding: 10px;
      padding-left: 15px;
      line-height: 50px;
      transition: display 5s ease-out;
      margin: 0;
    }
  }
`;
export default Header;
