import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Mensagem(props) {

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
                        <div className="mensagem" > {props.denuncia.msg} </div> 
                        <Link to={{pathname:'/denuncia-details', state:props.denuncia  }}> <div className="ver-mais-dt"> Ver mais...</div> </Link>
                    </div>
                </div>
            </div>
        </Container>
    ) 
}