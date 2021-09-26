import { Container, BoxCaracter } from "./styled";

function MenuLeft() {
    return(
        <Container>
            
            <div className="mensagem"> <img src="/assets/images/denuncia-detalhe/"alt=""/> Mensagens </div>
            <div className="mensagem"> Características  </div>
            <div className="mensagem"> Local  </div>
        </Container>
    )
}

function BoxDetails() {
    return(
        <BoxCaracter> 
            <div className="name-caracter"> </div>
                    <div className="box-caracter-image"> 
                    <img src="/assets/images/denuncia-detalhe/chinelo.svg" alt=""/>
                <div className="desc-caracter"> Chinelo </div>
            </div>
        </BoxCaracter>
    )
}


export {MenuLeft, BoxDetails}