import React from "react";
import styled from "styled-components";
const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: black;
  padding: 20px;
`;
function FlexContainer({ children }: { children: any }) {
  //{children}:any 도 가능
  return <FlexStyle>{children}</FlexStyle>;
}

export default FlexContainer;
