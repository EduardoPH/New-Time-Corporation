import { Container } from "./styled";
import Menu from "../../components/menu";
import NavMenu from '../../components/details-denuncia'

export default function Pag() {
    return(
        <Container>
            <Menu/>
            <div className="dt-titulo"> Denúncia </div>
            <div className="container-pt1">
                <div className="dt-conteudo"> 
                    <NavMenu/>
                    <div className="container-conteudo">
                        <div className="dt-pt1"> 
                            <div className="rc-user"> 
                                <img className="rc-img-user" src="/assets/images/denuncias-recents/Perfil.png"alt=""/>
                                <div className="rc-name-user"> User14143 </div>
                            </div>
                            <button className="bt-voltar"> Voltar </button>
                        </div>
                        <div className="pt1-caixa"> 
                            <div className="rc-mensagem"> 
                                <span className="rc-setinha"> <img src="/assets/images/denuncias-recents/Setinha.png" alt=""/> </span>
                                <div className="rc-caixa">
                                    <div className="Mensagem-caixa"> opaaa </div>
                                    <div className="ver-mais"> Ver Mais.. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}