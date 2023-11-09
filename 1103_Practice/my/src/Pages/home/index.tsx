//npm install axios
//.env
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Product } from "interface/product";
import ClassItem from "Pages/home/ClassItem";

function Home() {
  const [user, setUser] = useState<Product[]>();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL!).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div>
      <h2
        style={{
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
          fontSize: "16px",
          color: "#555",
        }}
      >
        베스트 상품
      </h2>
      <Container>
        {user &&
          user.map((elem) => (
            <ClassItem item={elem} key={elem.name}></ClassItem>
          ))}
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Home;
