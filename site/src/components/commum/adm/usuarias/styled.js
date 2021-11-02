import styled from "styled-components";

const BoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  overflow-x: auto;
  .pesquisa {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .btm-pesquisar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3em;
      height: 3em;
      background-color: transparent;
      border: solid 1px;
      border-color: white;
      border-radius: 50%;
      cursor: pointer;
      img{
        cursor: pointer;
      }
    }
  }
  input {
    width: 90%;
    height: 3em;
    outline: none;
    cursor: auto;
  }
  .tabela-usuaria {
    margin-top: 1em;
    width: 86%;
    border-collapse: collapse;

    th {
      color: white;
      font-size: 1.5em;
      background-color: #010be1;
      font-family: "arial";
    }
    td {
      text-align: center;
      padding: 8px;
      font-size: 18px;
      font-family: arial;
      font-weight: 600;
    }
    .coluna-acao button {
      color: white;
      font-family: arial;
      border: solid 4px;
      border-color: #111ae3;
      background: #111ae3;
      border-radius: 100px;
      cursor: pointer;
      width: 6em;
      &:hover {
        background: #ffff;
        color: #111ae3;
        transition: 1s;
      }
    }
    .previa {
      background: #dcdcdc;
      width: 23em;
      height: auto;
      border-style: solid;
      border-width: 2px;
      border-color: white;
    }
  }
`;

export default BoxStyled;
