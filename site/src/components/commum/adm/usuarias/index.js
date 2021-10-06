import { useState, useEffect } from "react";
import BoxStyled from "./styled";


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    function SobreSite(){
        const apiResponse = [
            {
                nome: "ludiarne",
                emial: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludiarne",
                emial: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludiarne",
                emial: "luane@gamil.com",
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
                            <td>{item.emial}</td>
                            <td>{item.tel}</td>
                            <td>{item.cpf}</td>
                            <td className="coluna-acao"><button>Ver Perfil</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}