import React from "react";
import styled from "styled-components";

interface ItemProps {
  image: string;
  preorder: string;
  model: string;
  title: string;
  desc: string;
  color: string;
}
interface ClassItemProps {
  item: ItemProps;
}

export default function ClassItem({ item }: ClassItemProps) {
  const { image, preorder, model, title, desc, color } = item;
  return (
    <div>
      <FlexContainer>
        <img src={image} alt={title}></img>
        <Information style={{ color }}>
          {preorder}
          <br />
          {model}
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </Information>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 400px;
    border-radius: 18px;
    box-shadow: 0px 0px 20px 2px #ddd;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 20px 2px #ccc;
    }
  }
  transition: 0.3s;
  &:hover {
    scale: 1.01;
  }
  &:active {
    animation: move 0.1s infinite;
  }
  @keyframes move {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }
`;
const Information = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #bbb;
  font-size: 12px;
  font-weight: bold;
  h2 {
    font-weight: 400;
  }
`;
