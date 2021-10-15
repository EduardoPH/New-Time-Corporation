import BoxStyled from "./styled";
import Button from '../../../administrador/index';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Index(props){
    const item = props.info;
    const [denun, setDenun] = useState(item.denuncia)
    
    return(
        <BoxStyled>
            <h1>Validar Denúncia</h1>
            <div className="box-denuncia">
                <div className="cabecalho">
                    < img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                    <div className="informacoes-usuaria">
                        <p1>   {item.nome} </p1>
                        <span> {item.email} </span>
                        <span> {item.tel} </span>
                        <Link to={{pathname:"/administrador/usuaria/perfil", state:{item}}}><button > Perfil</button></Link>
                    </div>
                </div>
                <textarea value={denun}  onChange={  e => setDenun(e.target.value)}/>
                <div className="btms-acoes">
                    <Button type="alterar" width="16em"/> 
                    <Button type="excluir" width="16em"/>
                    <Button type="adicionar" width="16em"/>
                </div>
            </div>
        </BoxStyled>
    )
}