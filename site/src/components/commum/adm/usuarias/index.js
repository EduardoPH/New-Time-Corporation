import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BoxStyled from "./styled";


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    function SobreSite(){
        const apiResponse = [
            {
                nome: "ludiarne1",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludiarn2e",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludiarn3e",
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
            <h1>Usuárias</h1>
            <input type="text" placeholder="Pesquisar por usuária..."/>
            <table className="tabela-usuaria">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th className="coluna-acao"></th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map (item => 
                        <tr>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.tel}</td>
                            <td>{item.cpf}</td>
                            <td className="coluna-acao">< Link to={{pathname: "/administrador/perfil/usuaria", state: {item}}}><button>Ver Perfil</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}