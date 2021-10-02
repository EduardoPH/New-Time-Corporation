import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: url(${"/assets/images/estatisticas/fundo.svg"});
  background-size: cover;
  height: 100vh;
  width: 100%;

  .caixa {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  .imgPC img {
    width: 30em;
  }

  .Tit {
    font: 700 2.4em Arial;
    color: white;
  }

  .direita {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(229, 179, 254, 0.8);
    border-radius: 14px;
  }

  .ti {
    display: flex;
    font: 100 2em arial;
    color: #7f00bf;
    justify-content: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .inputs {
    display: flex;
    align-self: center;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    width: 25em;
    height: 4em;
    border: none;
    margin: 0em 2em 2.2em 2em;
    cursor: auto;
    background-color: rgb(242, 242, 242, 80%);
  }

  input::-webkit-input-placeholder {
    color: #b133ff;
    font: 16px arial;
    padding-top: 2em;
  }

  .lado {
    display: flex;
    justify-content: space-between;
    width: 20.7em;
    height: 3em;
    align-items: center;
    margin-bottom: 1.5em;
  }

  .bot2 {
    display: flex;
    font-size: 1em;
    color: #3b3b3b;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .bot1 button {
    background-color: #b133ff;
    color: white;
    width: 12em;
    height: 3em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 0, 0, 0.2);
      transition: 0.3s;
      color: #7f00bf;
    }
  }

  .nao-possui {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(229, 179, 254, 0.8);
    border-radius: 14px;
    margin-top: 1em;
  }

  .np {
    display: flex;
    font: 100 2em arial;
    color: #7f00bf;
    justify-content: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .botC button {
    background-color: #b133ff;
    color: white;
    width: 25em;
    height: 3.5em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-bottom: 2em;
    &:hover {
      background-color: rgba(255, 0, 0, 0.2);
      transition: 0.3s;
      color: #7f00bf;
    }
  }
`;
export default Container;
