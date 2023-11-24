import React, { useState } from "react";
import styled from "styled-components";
import Wrap from "Pages/about/Wrap";

interface NameTagType {
  url: string;
  name: string;
  snsID: string;
  posts: number;
  followers: string;
  following: number;
}
function NameTag({
  url,
  name,
  snsID,
  posts,
  followers,
  following,
}: NameTagType) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputs, setInputs] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value);
  };
  return (
    <Wrap>
      <NameTagStyle>
        <img src={url} alt="profile"></img>
        <Info>
          <h2>{name}</h2>
          <p>{snsID}</p>
          <ul className="infoUl">
            <li>
              <b>{posts}</b>posts
            </li>
            <li>
              <b>{followers}</b>followers
            </li>
            <li>
              <b>{following}</b>following
            </li>
          </ul>
        </Info>

        <button className="inputBTn" onClick={toggleModal}>
          write
        </button>

        <div className="desc">{inputs}</div>

        {/* {modal && <컴포넌트 /> } -> true인경우에만 컴포넌트 나오도록*/}
        {modal && (
          <Modal>
            <input onChange={onChange} placeholder="자기소개"></input>

            <button onClick={toggleModal}>x</button>
          </Modal>
        )}
      </NameTagStyle>
    </Wrap>
  );
}

const NameTagStyle = styled.div`
  background-color: white;

  position: relative;
  display: flex;
  align-items: center;

  width: 500px;
  height: 200px;
  margin: 100px auto;
  padding: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  //box-shadow: -4px 4px 15px rgb(169, 219, 254), 4px -4px 15px rgb(255, 153, 194);
  border-radius: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  h2 {
    margin-bottom: 10px;
  }
  p {
    color: gray;
    margin: 0;
  }
  .inputBTn {
    background-color: rgb(169, 210, 254);
    border: none;
    color: white;
    width: 50px;
    height: 30px;
    border-radius: 2px;
    position: relative;
    right: 30px;
    top: -30px;
  }
  .desc {
    position: absolute;
    width: 300px;
    left: 150px;
    bottom: 60px;
    font-size: 12px;
    font-weight: bold;
  }
`;
const Info = styled.div`
  width: 100%;
  .infoUl {
    background-color: white;
    margin-top: 10px;
    width: 100%;
  }
  li {
    font-size: 14px;
    color: lightgrey;
    padding-right: 20px;
    background-color: white;
  }
  b {
    color: grey;
    padding-right: 5px;
  }
`;

const Modal = styled.div`
  width: 270px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(169, 210, 254);
  border-radius: 10px;
  input {
    border: none;
    display: block;
    width: 80%;
    height: 30px;
    margin: 50px auto;
  }
  button {
    border: none;
    display: block;
    margin: 0 auto;
  }
`;
export default NameTag;
