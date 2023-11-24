import styled from "styled-components";
import React, { useState, useEffect } from "react";
//https://react-icons.github.io/react-icons/
//npm install react-icons --save
import { CiCircleCheck } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

//map 개별 ?????????
interface todoType {
  id: number;
  text: string;
  active: boolean;
}

export default function Todo() {
  const today = new Date();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토", "일"];
  let todayDayOfWeek = dayOfWeek[today.getDay()];

  const [todo, setTodo] = useState<string>(""); // todoType??????
  const [todos, setTodos] = useState<string[]>([]); //todoType[] ???????????
  const [count, setCount] = useState<number>(0);
  const [view, setView] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (todo === "") {
      return;
    }
    if (e.key === "Enter") {
      setTodo("");
      setTodos([todo, ...todos]); //setToDos((currentArray) => [toDo, ...toDos])
    }
  };
  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  console.log(todos);

  const handleCircleClick = () => {
    setIsActive(!isActive);
  };
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <TodoWrapper>
        <Title>
          <h1>
            {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
          </h1>
          <h2>{todayDayOfWeek}요일</h2>
        </Title>

        <TodoList>
          <h2>할 일 {count}개 남음</h2>
          <hr />
          <ul>
            {todos.map((elem, index) => (
              <li
                key={index}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <CiCircleCheck
                  className="circle"
                  style={{ color: isActive ? "green" : "grey" }}
                  onClick={handleCircleClick}
                />
                <p>{elem}</p>
                <p>{isHovered && <FaTrash />}</p>
              </li>
            ))}
          </ul>
        </TodoList>

        <div className="todoInput">
          {view ? null : (
            <input
              type="text"
              value={todo} //초기화하려면 필요
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            ></input>
          )}
        </div>
      </TodoWrapper>
    </>
  );
}

const TodoWrapper = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
`;

const Title = styled.div``;
const TodoList = styled.div`
  .circle {
    margin: auto 0;
  }
  li {
    display: flex;
    text-align: center;
  }
`;
