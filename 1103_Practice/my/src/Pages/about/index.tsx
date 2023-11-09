import React from "react";
import NameTag from "Pages/about/NameTag";
import Profile from "Images/profile1.jpg";

function About() {
  return (
    <NameTag
      url={Profile}
      name="cey"
      snsID="@ceysns"
      posts={1039}
      followers="42.8K"
      following={930}
    ></NameTag>
  );
  //src에 있는 이미지 파일 : import 혹은 절대경로 혹은 require 가능
  //public에 있는 이미지 파일 : 상대경로 가능
}

export default About;
