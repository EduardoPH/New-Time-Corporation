import { Link } from "react-router-dom";
import { Container } from "./styled";
export default function Menu(){
    return(
        <Container>
            <div className="Logo">
                <img src="/assets/images/menu/Logo-ntc.svg" alt="logo"/>
            </div>
            <Link>
                <div className="item-menu">
                    <img src="" alt=""/>
                    Home
                </div>
            </Link>
            <Link>     
                <div className="item-menu">
                    <img src="" alt=""/>
                    Denúncias
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Estatísticas
                    <img src="" alt=""/>
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Apoio
                    <img src="" alt=""/>
                </div>
            </Link>
            <Link>
                <div className="item-menu">
                    Login
                    <img src="" alt=""/>
                </div>
            </Link>
        </Container>
    )
}