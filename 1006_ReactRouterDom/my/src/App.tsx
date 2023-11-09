//npm install react-router-dom
//npm install --save @types/react-router-dom

//index.tsx에 BrowserRouter import, Router로 App 감싸기

import React from "react";
import Router from "./components/Router";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <Router></Router>;
    </>
  );
}

export default App;
