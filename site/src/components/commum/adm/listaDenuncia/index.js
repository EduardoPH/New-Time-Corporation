import { useState, useEffect } from "react";
import BoxStyled from "./styled";
import { Link } from "react-router-dom";


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    function SobreSite(){
        const apiResponse = [
            {
                id: "1",
                nome: "ludiarne",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            },
            {
                id: "2",
                nome: "ludiarne2",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            },
            {
                id: "3",
                nome: "ludiarn3e",
                email: "luane@gamil.com",
                tel: "11 9999-9999",
                cpf: "6545645464",
                data: "22020-25-25",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur"
            }
        ]
        setEventos(apiResponse)
    };
    useEffect(
        () => {SobreSite() }, [] 
    );

    return(
        <BoxStyled >
            <h1>Denúncias</h1>
            <input type="text" placeholder="PESQUISAR POR PALAVRAS CHAVES..."/>
            <table className="tabela-denun">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th >Denúncia</th>
                        <th className="coluna-acao"></th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map((item,i) =>
                        <tr key={i}>
                            <td>{item.nome}</td>
                            <td>{item.tel}</td>
                            <td className="previa">
                                {item.denuncia}
                            </td>
                            <td className="coluna-acao">
                                <Link to={{pathname:"/administrador", state: item}}>
                                    <button>Ver Denúncia</button>
                                </Link>
                            </td>
                        </tr>
                    )} 
                </tbody>
            </table>
        </BoxStyled>
    )
}