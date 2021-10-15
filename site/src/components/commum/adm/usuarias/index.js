import { useState, useEffect } from "react";
import BoxStyled from "./styled";
import { Link } from "react-router-dom";

export default function Index(props){
    const [eventos, setEventos] = useState([]);
    const [usuaria, setUsuaria] = useState('')
    function SobreSite(){
        const apiResponse = [
            {
                nome: "ludiar2ne",
                emial: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludiar3ne",
                emial: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464" 
            },
            {
                nome: "ludia54rne",
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
            <input type="text" placeholder="Pesquisar por usuária..." onChange={e => setUsuaria(e.target.value)}/>
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
                            <td className="coluna-acao"><Link to={{pathname:"/administrador/usuaria/perfil", state:{item}}}><button>Ver Perfil</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}