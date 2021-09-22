import { Link } from "react-router-dom";
import { Container } from "./styled";
export default function Menu(){
    return(
        <Container>
            <div className="logo">
                <img src="/assets/images/menu/Logo-ntc.svg" alt="logo"/>
            </div>
            <Link >
                <div className="item-menu">
                    Home
                    <img src="/assets/images/menu/Home Office.svg" alt="Home-svg"/>
                </div>
            </Link>
            <Link>     
                <div className="item-menu">
                    Denúncias
                    <img src="/assets/images/menu/System Report.svg" alt="denuncia-svg"/>
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Estatísticas
                    <img src="/assets/images/menu/Web Analytics.svg" alt="estati-svg"/>
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Apoio
                    <img src="/assets/images/menu/AIDS Ribbon.svg" alt="apoio-svg"/>
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Login
                    <img src="/assets/images/menu/login.svg" alt="login-svg"/>
                </div>
            </Link>
        </Container>
    )
}