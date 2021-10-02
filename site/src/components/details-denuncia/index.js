import { Container, BoxCaracter } from "./styled";

function MenuLeft() {
  return (
    <Container>
      <div className="mensagem">
        <img src="/assets/images/denuncia-detalhe/arrow-black.svg" alt="" />
        Mensagens
      </div>
      <div className="mensagem">
        <img src="/assets/images/denuncia-detalhe/arrow-black.svg" alt="" />
        Características
      </div>
      <div className="mensagem">
        <img src="/assets/images/denuncia-detalhe/arrow-black.svg" alt="" />
        Local
      </div>
    </Container>
  );
}

function BoxDetails() {
  return (
    <BoxCaracter>
      <div className="box-caracter-image">
        <img src="/assets/images/denuncia-detalhe/chinelo.svg" alt="" />
        <div className="desc-caracter"> Chinelo </div>
      </div>
    </BoxCaracter>
  );
}

export { BoxDetails, MenuLeft };
