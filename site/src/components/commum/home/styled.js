import styled from "styled-components";

const Conteiners = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 31.5em;

  .titulo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2em;
    font-weight: bold;

    font-weight: 400;
  }

  .imagem {
    width: 100%;
    img {
      width: 66%;
      height: 4%;

      max-width: 20em;
    }
  }

  .titu {
    font-size: 1.5em;
    color: white;
    font-family: "Russo One", sans-serif;
    font-weight: 400;
  }

  .legenda {
    display: flex;
    justify-content: center;
    width: 80%;
    color: white;
    font-size: 1.6em;
    font-family: Arial;
    max-width: 63%;
    margin-bottom: 1em;
  }
`;
export { Conteiners };
