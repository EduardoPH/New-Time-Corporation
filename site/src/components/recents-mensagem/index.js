import { Container } from "./styled";

export default function Mensagem() {
    return(
        <Container>
            <div className="rc-user"> 
                <img className="rc-img-user" src="/assets/images/denuncias-recents/Perfil.png"alt=""/>
                <div className="rc-name-user"> User14143 </div>
            </div>
            <div className="rc-mensagem"> 
                <span className="rc-setinha"> <img src="/assets/images/denuncias-recents/Setinha.png" alt=""/> </span>
                <div className="rc-caixa">
                    <div className="Mensagem-caixa"> opaaa </div>
                    <div className="ver-mais"> Ver Mais.. </div>
                </div>
            </div>
        </Container>
    )
}