import { Link } from "react-router-dom";
import { Container } from "./styled";

import Cookies from 'js-cookie';



function VerLogado(){

    let c = Cookies.get('usuariaLogada') 

    if(c === undefined  )
        return "Login"

    let usuaria = JSON.parse(c).nome
    let nomecompleto = usuaria.substring(usuaria.indexOf(" "),usuaria.indexOf(" ")-usuaria.length)

    if(usuaria.includes(" "))
       return nomecompleto;    
    else 
       return usuaria;
}


export default function Menu(){

    return(
        <Container>
             <div className="logo" style={{textDecoration: "none"}}>
                <Link  to="/login-administrador">
                    <img src="/assets/images/menu/Logo-ntc.svg" alt="logo"/>
                </Link>
            </div>
            <Link to="/formulario"><button className="butao" onClick={() => Cookies.remove('dadosDenuncia')}>  DENUNCIAR! </button></Link>
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="item-menu">
                    Home
                    <img src="/assets/images/menu/Home Office.svg" alt="Home-svg"/>
                </div>
            </Link>
            <Link to="/denuncia-recentes" style={{textDecoration: "none"}}>     
                <div className="item-menu">
                    Denúncias
                    <img src="/assets/images/menu/System Report.svg" alt="denuncia-svg"/>
                </div>
            </Link>
            <Link to="/estatisticas" style={{textDecoration: "none"}}>
                <div className="item-menu">
                    Estatísticas
                    <img src="/assets/images/menu/Web Analytics.svg" alt="estati-svg"/>
                </div>
            </Link>
            <Link to ="/apoio" style={{textDecoration: "none"}}>
                <div className="item-menu">
                    Apoio
                    <img src="/assets/images/menu/AIDS Ribbon.svg" alt="apoio-svg"/>
                </div>
            </Link>
            <Link to="/login" style={{textDecoration: "none"}}>
                <div className="item-menu">
                   {VerLogado()}
                    <img src="/assets/images/menu/login.svg" alt="login-svg"/>
                </div>
            </Link>
        </Container>
    )
}