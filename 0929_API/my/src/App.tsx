import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Person } from "interface/person";

function App() {
  const [user, setUser] = useState<Person>();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL!).then((res) => {
      setUser(res.data.results[0]);
      // setUser(res.data);
    });
  }, []);

  return <div>{user && <NameTag>{user.name.first}</NameTag>}</div>;
  // return <div>{JSON.stringify(user)}</div>;
}

export default App;

const NameTag = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
`;
