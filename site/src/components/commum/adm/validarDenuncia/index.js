import BoxStyled from "./styled";
import Button from '../../../administrador/index';
import {Link} from 'react-router-dom';

export default function Index(props){
    let pessoa = props.info;
    return(
        <BoxStyled>
            <h1>Validar Denúncia</h1>
            <div className="box-denuncia">
                <div className="cabecalho">
                    < img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                       
                        <div className="informacoes-usuaria">
                            <p1>   {props.info.nome} </p1>
                            <span> {props.info.email} </span>
                            <span> {props.info.tel} </span>
                            <Link to={{pathname: "/administrador/perfil/usuaria", state:  {pessoa}}}><button > Perfil</button></Link>
                        </div>
                     
                </div>
                <textarea />
                <div className="btms-acoes">
                    <Button type="alterar" width="16em"/> 
                    <Button type="excluir" width="16em"/>
                    <Button type="adicionar" width="16em"/>
                </div>
            </div>
        </BoxStyled>
    )
}