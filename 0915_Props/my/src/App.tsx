import React from "react";
import MyComponent from "./MyComponent";
import FlexContainer from "FlexContainer";
import Img from "Img";
import Title from "Title";
import Desc from "Desc";

function App() {
  return (
    <div>
      <MyComponent firstname="eunyoung" lastname="choi"></MyComponent>
      <FlexContainer>
        <Img url="https://cdn.class101.net/images/60b28d67-66e5-4e41-84b3-98cf87e28408/1920xauto.webp"></Img>
        <Title name='"원밀리언 댄스 스튜디오 with 리아킴"에게 배우는 댄스 입문'></Title>
        <Desc category="라이프스타일" instructor="1MILLION"></Desc>
      </FlexContainer>
    </div>
  );
}

export default App;
