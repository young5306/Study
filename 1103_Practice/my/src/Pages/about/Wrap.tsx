import React from "react";
import styled from "styled-components";

export default function Wrap({ children }: any) {
  return <WrapStyle>{children}</WrapStyle>;
}

const WrapStyle = styled.div`
  margin-bottom: 10px;
  width: 800px;
  height: 480px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, rgb(169, 219, 254), rgb(255, 153, 194));
`;
