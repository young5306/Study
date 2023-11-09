import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "", //name1
    nickname: "", //name2
  });
  const { name, nickname } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(inputs, name, value);
    setInputs({
      ...inputs, //기존의 input 객체 복사 -> 이거 없으면 왜 에러나지 - '불변성을 지켜야' 리액트 컴포넌트에서 상태가 업데이트 됐을을 감지하고 리렌더링 진행.
      [name]: value, //[name1] : 작성값1, [name2] : 작성값2
    });
  };
  const nameInput = useRef<HTMLInputElement>(null); //useRef로 특정 DOM 선택하기

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    if (nameInput.current) {
      //current로 DOM 객체 직접 가리킴
      nameInput.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={nameInput}
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값: {name} ({nickname})
        </b>
      </div>
    </div>
  );
}

export default InputSample;
