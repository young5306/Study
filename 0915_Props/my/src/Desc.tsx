import React from "react";
import styled from "styled-components";

const DescStyle = styled.div`
  color: #ddd;
  font-size: 14px;
  margin-top: 10px;
`;
interface descType {
  category: string;
  instructor: string;
}
function Desc({ category, instructor }: descType) {
  return (
    <DescStyle>
      {category}
      {` | `}
      {instructor}
    </DescStyle>
  );
}

export default Desc;
