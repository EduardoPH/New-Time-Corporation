import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BoxStyled from "./styled";


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    function SobreSite(){
        const apiResponse = [
            {
                nome: "ludiarne1",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur",
                tel: "11 9999-9999"
            },
            {
                nome: "ludiarne2",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur",
                tel: "11 9999-9999"
            },
            {
                nome: "ludiarne3",
                denuncia: "Os conceitos de Indústria Cultural e Cultura de Massa foram cunhados pela famosa Escola de Frankfurt, na Alemanha. ... A Cultura de Massa é produzida pela Indústria Cultural, ou seja, um conjunto de grandes empresas que pertencem à classe dominante que tem por objetivo produzir cultur",
                tel: "11 9999-9999"
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
                    {eventos.map( item =>
                        <tr>
                            <td>{item.nome}</td>
                            <td>{item.tel}</td>
                            <td className="previa">
                                {item.denuncia}
                            </td>
                            <td className="coluna-acao"><Link to={{pathname: "/administrador/validarDenuncia", state: {item}}}><button>Ver Denúncia</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </BoxStyled>
    )
}