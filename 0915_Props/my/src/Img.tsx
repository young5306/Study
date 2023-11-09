import React from "react";
import styled from "styled-components";

interface urlType {
  url: string;
}
const ImgStyle = styled.img`
  width: 300px;
  border-radius: 5px;
`;

function Img({ url }: urlType) {
  return <ImgStyle src={url}></ImgStyle>;
}

export default Img;
