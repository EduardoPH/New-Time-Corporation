import { useState, useEffect } from "react";
import BoxStyled from "./styled";
import { Link } from "react-router-dom";
import Api from "../../../../services/api";
const api = new Api()
export default function Index(props){
    const [eventos, setEventos] = useState([]);
    async function SobreSite(){
        let r = await api.listarDenun()
        setEventos(r)
    }

    async function Pesquisar(){
        let r = await api.pesqDenun()
        setEventos(r)
    }


    useEffect(
        () => {SobreSite() }, [] 
    );  
    return(
        <BoxStyled >
            <h1>Denúncias</h1>
            <div className="pesquisar">
                <input type="text" placeholder="PESQUISAR POR PALAVRAS CHAVES..."/>
                <button className="btm-pesquisar" onClick={buscarUsu}><img src="/assets/images/administrador/icons8-search.svg"alt="erro"/></button>
            </div>
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
                            <td>{item.id_usuario_infoc_ntc_usuario.nm_usuario}</td>
                            <td>{item.id_usuario_infoc_ntc_usuario.ds_telefone}</td>
                            <td className="previa">
                                {item.ds_depoimento}
                            </td>
                            <td className="coluna-acao">
                                <Link to={{pathname:"/administrador", state: item}}>
                                    <button>Alterar</button>
                                    <button>Visualizer</button>
                                </Link>
                            </td>
                        </tr>
                    )} 
                </tbody>
            </table>
        </BoxStyled>
    )
}