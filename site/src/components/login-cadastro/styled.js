import styled from "styled-components";

const InputStyle = styled.input`
  padding: 0pc 1em;
  margin-top: 1em;
  border-radius: 5px;
  width: 25em;
  height: 4em;
  border: none;
  margin: 0em 2em 2.2em 2em;
  cursor: auto;
  outline: none;
  color: #b133ff;
  ::-webkit-input-placeholder {
    color: #b133ff;
    font: 16px arial;
    padding-top: 2em;
  }
  &:focus {
    border: solid 3px #fff;
    background-color: rgba(229, 179, 254, 0.8);
    transition: 0.3s;
    color: #fff;
    opacity: initial;
    box-shadow: 0px 0px 35px #fff, 0px 0px 15px inset;

    &::-webkit-input-placeholder {
      color: #fff;
      bottom: 2em;
      transition: 1.5s;
      transform: translateX(-280px);
    } 
  }
`;

const ButtonsStyle = styled.button`
  background-color: #b133ff;
  color: white;
  width: 25em;
  height: 3.5em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 2em;
  &:hover {
    background-color: #b133ff;
    transition: 0.3s;
    border: solid 3px #fff;
    box-shadow: 0px 0px 20px #fff, 0px 0px 10px inset;
    transition: 0.21s;
    color: white;
  }
`;

export { ButtonsStyle, InputStyle };
