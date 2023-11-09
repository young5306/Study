import React from "react";
import Title from "Title";
import ClassItem from "ClassItem";
import ASSIGNMENT_INFO from "assignment";
import styled from "styled-components";

/* 
<설명> 수정
컴포넌트 - App, Title, ClassItem, assignment(info 배열 저장)
App에서 Container(flex row) 스타일태그 생성
ClassItem(flex column)에서 FlexContainer 스타일태그 생성  
*/

function App() {
  return (
    <div>
      <Title black="최신 제품." gray="따끈따끈한 신제품 이야기."></Title>
      <Container>
        {ASSIGNMENT_INFO.map((elem) => (
          <ClassItem item={elem} key={elem.title}></ClassItem>
        ))}
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  // background-color: #eee;
  margin: 20px;
`;
