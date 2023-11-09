import React from "react";
import styled from "styled-components";

interface NameTag {
  firstname: string;
  lastname: string;
}
const NameTagStyle = styled.div`
  width: 400px;
  height: 150px;
  box-shadow: 2px 2px 8px 2px #eee;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
  line-height: 150px;
`;

function MyComponent({ firstname, lastname }: NameTag) {
  return (
    <NameTagStyle>
      {firstname} {lastname}
    </NameTagStyle>
  );
}

export default MyComponent;
