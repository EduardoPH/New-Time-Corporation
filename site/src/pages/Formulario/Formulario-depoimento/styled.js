import styled from "styled-components";

const Containerformulario = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${"/assets/images/estatisticas/fundo.svg"});
  background-size: cover;
  height: 100vh;
  width: 100%;

  .tudo {
    display: flex;
    justify-content: center;
  }
  .pag {
    display: flex;
    background-color: rgb(255, 255, 255, 40%);
    border-radius: 1.2em;
    flex-direction: row;
    margin-top: 1.5em;
    padding: 2em;
    width: 90%;
  }

  .menu-lateral {
    padding: 1em 0em;
    display: flex;
    background-color: white;
    font-size: 1em;
    border-radius: 0.3em;
    flex-direction: column;
    align-self: center;
    font-family: arial;
  }

  .textos-lateral {
    padding: 0.2em 0.3em;
    font-size: 1.4em;
  }

  .titulo {
    display: flex;
    justify-content: center;
    font-size: 3.5em;
    color: white;
    font-family: arial;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
  }

  .form-2 {
    display: flex;
    align-items: center;
  }

  textarea {
    display: flex;
    border-radius: 0.6em;
    border: none;
    resize: none;
    margin-left: 1.5em;
    width: 100%;
    height: 100%;
  }

  button {
    padding: 0.4em 1em;
    border: none;
    border-radius: 2em;
    font-size: 1.5em;
    background-color: #fc02a0;
    color: white;
    margin-top: 2.5em;
    margin-bottom: 1.5em;
  }

  .form-2 {
    display: flex;
    justify-content: space-between;
  }

  .botao {
    display: flex;
    justify-content: center;
  }
  .conteudo2 {
    display: flex;
    width: 78.5%;
    height: auto;
  }
`;
export default Containerformulario;
