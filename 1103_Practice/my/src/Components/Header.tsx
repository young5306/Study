//npm install react-router-dom
//npm install --save @types/react-router-dom //오류 뜸 -> 삭제 (types는 업데이트 안돼서 최신 기능의 RRD에 대한 타입 정의 없기 때문에 에러 뜸)
//index.tsx에 BrowserRouter import, Router로 App 감싸기
import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./../Pages/home";
import About from "./../Pages/about";
import Contact from "./../Pages/contact";

function Header() {
  return (
    <>
      <HeaderStyle>
        <Logo>
          <img src={require("./../Images/profile1.jpg")} alt="profile"></img>
          <div>사용자</div>
        </Logo>
        <Menu>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            {/* home 늦게 뜸 */}
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
  margin: 10px;
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
const Menu = styled.div`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    background-color: black;
    //border-radius: 5px;
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
`;
export default Header;
