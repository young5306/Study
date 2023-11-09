import React from "react";
import styled from "styled-components";

interface Color{
  black:string;
  gray:string;
}

function Title({black, gray}:Color){
  return (
  <TitleStyle>
    <h2>{black} <span>{gray}</span></h2>
  </TitleStyle>
  );
}

const TitleStyle=styled.div`
  margin:20px;
  span{
    color:#777;
  }
`;
export default Title;