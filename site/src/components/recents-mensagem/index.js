import { Container } from "./styled";

export default function Mensagem() {
    return(
        <Container>
            <div className="rc-user"> 
                <img className="rc-img-user" src="/assets/images/denuncias-recents/Perfil.png"alt=""/>
                <div className="rc-name-user"> User14143 </div>
            </div>
            <div class="rc-box">
                <img id="image" src="/assets/images/denuncias-recents/base.svg" alt=""/>
                <label className="rc-mensagem">Opaa</label>
                <div className="ver-mais">  Ver mais... </div>
            </div>
        </Container>
    )
}