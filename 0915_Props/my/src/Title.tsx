import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  color: white;
  margin-top: 15px;
`;
interface nameType {
  name: string;
}
function Title({ name }: nameType) {
  return <TitleStyle>{name}</TitleStyle>;
}

export default Title;
