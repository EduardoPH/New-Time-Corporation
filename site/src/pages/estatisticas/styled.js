import styled from "styled-components";

const Containers = styled.div`
  display: flex;
  flex-direction: column;

  background: url(${"../assets/images/estatisticas/fundo.svg"});
  background-size: cover;
  height: 100vh;
  width: 100%;

  .titulo {
    display: flex;
    align-self: center;
    color: white;
    font: 700 2em arial;
    margin: 0.9em 0em;
  }

  .carrousel1 {
    align-self: center;
    width: 82%;
    background-color: #7f00bf;
    height: 30em;
    border-radius: 1em;
  }

  .caixa {
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 28em;
    align-items: center;
    justify-content: space-around;
  }

  .centro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }

  .subT {
    font-weight: bolder;
    font-family: arial;
    background-color: #ff00e6;
    color: white;
    border-radius: 10px;
    padding: 1em;
    font-size: 1.5em;
    width: 15em;
  }

  .porc-img img {
    width: 100%;
  }

  .grafico {
    height: 100%;
    width: 40%;
    align-self: center;
    display: flex;
  }
`;

export default Containers;
