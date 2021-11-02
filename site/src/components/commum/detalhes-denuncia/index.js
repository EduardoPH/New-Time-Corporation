import { Container, BoxCaracter } from "./styled";
import {Link} from 'react-router-dom'

function MenuLeft() {
    return(
        <Container>
            <Link to="/denuncia-details"> 
                <div className="mensagem"> Mensagens </div>
            </Link>
            <Link to="/denuncia-details/caracters">
                <div className="mensagem"> Características  </div>
            </Link>
            <Link to="/denuncia-details/map">
                <div className="mensagem"> Local  </div>
            </Link>
        </Container>
    )
}

function BoxDetails(props) {
    return(
        <BoxCaracter> 
                <div className="box-caracter-image"> 
                     <img src={props.image} alt=""/>
                <div className="desc-caracter"> {props.caracter} </div>
            </div>
        </BoxCaracter>
    )
}


export {MenuLeft, BoxDetails}