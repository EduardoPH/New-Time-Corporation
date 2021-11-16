import { Container, Container2 } from "./styled";
import { Link} from "react-router-dom";

function MensagemLeft(props) {
    const {depoimento} = props.denuncia;
    return(
        <Container style={{display: props.visible}}> 
            <div className="pt1-msg">
                <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/> 
            </div>
            <div className="pt2-msg">
                <div className="name-user"> {props.denuncia.id_usuario_infoc_ntc_usuario && props.denuncia.id_usuario_infoc_ntc_usuario.nome }</div>
                <div className="ct-msg"> 
                    <img className="setinha" src="/assets/images/denuncias-recentes/Setinha.png" alt=""/>
                    <div className="caixa-msg"> 
                        <div className="mensagem" > {depoimento.length >= 200 ? depoimento.substr(0, 200) + '...' : depoimento} </div> 
                        <Link to={{pathname:'/denuncia-details', state:props.denuncia  }}> <div className="ver-mais-dt"> Ver mais...</div> </Link>
                    </div>
                </div>
            </div>
        </Container>
    ) 
}

function MensagemRigth(props){
    const {depoimento} = props.denuncia;
    return(
        <Container2 style={{display: props.visible}}> 
            <div className="pt1-msg">
                <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/> 
            </div>
            <div className="pt2-msg">
                <div className="name-user"> {props.denuncia.id_usuario_infoc_ntc_usuario && props.denuncia.id_usuario_infoc_ntc_usuario.nome }</div>
                <div className="ct-msg"> 
                    <img className="setinha" src="/assets/images/denuncias-recentes/Setinha.png" alt=""/>
                    <div className="caixa-msg"> 
                        <div className="mensagem" > {depoimento.length >= 200 ? depoimento.substr(0, 200) + '...' : depoimento} </div> 
                        <Link to={{pathname:'/denuncia-details', state:props.denuncia  }}> <div className="ver-mais-dt"> Ver mais...</div> </Link>
                    </div>
                </div>
            </div>
        </Container2>
    ) 
}

export {MensagemLeft, MensagemRigth}