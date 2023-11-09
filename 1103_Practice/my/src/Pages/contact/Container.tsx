import React from "react";
import styled from "styled-components";
import Wrap from "Pages/about/Wrap";

function Container() {
  return (
    <Wrap>
      <ContainerStyle>
        <h2>Contact Us</h2>
        <form action="#">
          <fieldset>
            <legend>contact</legend>
            <ul>
              <li>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME"
                ></input>
              </li>
              <li>
                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-MAIL"
                ></input>
              </li>
              <li>
                <label htmlFor="message"></label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                ></input>
              </li>
              <li>
                <button type="submit">SUBMIT</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </ContainerStyle>
    </Wrap>
  );
}

const ContainerStyle = styled.div`
  background-color: white;
  width: 400px;
  margin: 20px auto;
  padding: 20px;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  form {
    width: 100%;
  }
  fieldset {
    border: 0;
  }
  legend {
    visibility: hidden;
  }
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    width: 100%;
    background-color: white;
  }
  input {
    width: 100%;
    height: 60px;
    border: none;
    border-bottom: 1px solid grey;
  }
  button {
    display: block;
    border-radius: 20px;
    background: linear-gradient(
      to right,
      rgb(169, 219, 254),
      rgb(255, 153, 194)
    );

    border: none;
    width: 200px;
    height: 30px;
    margin: 35px auto 0;
  }
`;
export default Container;
