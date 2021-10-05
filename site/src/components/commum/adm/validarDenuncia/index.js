import BoxStyled from "./styled";
import Button from '../../../administrador/index';
import { useState, useEffect } from "react";

export default function Index(props){
    const [eventos, setEventos] = useState([]);
    function SobreSite(){
        const apiResponse = [
            {
                nome: "ludiarne",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464"
            }
        ]
        setEventos(apiResponse)
    };
    useEffect(
        () => {SobreSite() }, [] 
    );
    return(
        <BoxStyled>
            <h1>Validar Denúncia</h1>
            <div className="box-denuncia">
                <div className="cabecalho">
                    < img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                        {eventos.map(item =>
                        <div className="informacoes-usuaria">
                            <p1>   {item.nome} </p1>
                            <span> {item.email} </span>
                            <span> {item.tel} </span>
                            <button > Perfil</button>
                        </div>
                        )}
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