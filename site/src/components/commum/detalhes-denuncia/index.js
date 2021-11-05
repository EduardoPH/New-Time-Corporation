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

function Image(name){
    switch(name){
        // PARTE DE CIMA
        case 'Regata':{
            return '/assets/images/denuncia-detalhe/parteCima/regata.png'
        }

        case 'Moletom': {
            return '/assets/images/denuncia-detalhe/parteCima/Moleton.png'
        }

        case 'Camisa': {
            return '/assets/images/denuncia-detalhe/parteCima/Camisa.png'
        }

        // PARTE DE BAIXO

        case 'Bermuda': {
            return '/assets/images/denuncia-detalhe/parteBaixo/Short.png'
        }

        case 'Calça': {
            return '/assets/images/denuncia-detalhe/parteBaixo/calcamoleton.png'
        }

        case 'Jeans': {
            return '/assets/images/denuncia-detalhe/parteBaixo/Jeans.png'
        }

        // CALÇADO

        case 'Tênis': {
            return '/assets/images/denuncia-detalhe/calcado/Tenis.png'
        }

        case 'Chinelo': {
            return '/assets/images/denuncia-detalhe/calcado/chinelo.png'
        }

        case 'Descalço': {
            return '/assets/images/denuncia-detalhe/calcado/pé.png'
        }
        

        case 'Outra': {
            return '/assets/images/denuncia-detalhe/interrogacao.png'
        }

        case 'Não sei': {
            return '/assets/images/denuncia-detalhe/interrogacao.png'
        }

        default:{
            return {erro: 'Item não identificado'}
        }
    }
    
}

function BoxDetails(props) {
    return(
        <BoxCaracter> 
                <div className="box-caracter-image"> 
                     <img src={Image(props.vestimento)} alt=""/>
                <div className="desc-caracter"> {props.caracter} </div>
            </div>
        </BoxCaracter>
    )
}


export {MenuLeft, BoxDetails}