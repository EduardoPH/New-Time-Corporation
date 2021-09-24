import { Container } from "./styled";

export default function Mensagem() {

    return(
        <Container>
            <div className="pt1-msg">
                <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/> 
            </div>
            <div className="pt2-msg">
                <div className="name-user"> user27562</div>
                <div className="ct-msg"> 
                    <img className="setinha" src="/assets/images/denuncias-recentes/Setinha.png" alt=""/>
                    <div className="caixa-msg"> <div className="mensagem" > declaração da testemunha ou da parte sobre deione com seus interesses e que figura no processo como prova testemunhal  declaração da testemunha ou da parte sobre determinado fato, do qual tem conhecimento ou que se relacione com seus interesses e que figura no processo como prova testemunhal </div> </div>
                </div>
            </div>
        </Container>
    )
}