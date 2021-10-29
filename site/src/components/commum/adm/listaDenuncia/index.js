import { useState, useEffect } from "react";
import BoxStyled from "./styled";
import { Link } from "react-router-dom";
import { Loading } from 'react-loading-ui';
import Api from "../../../../services/api";
const api = new Api()
export default function Index(props){
    const [eventos, setEventos] = useState([]);
    const [busca, setBuscar ] = useState('');
    async function SobreSite(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
        let r = await api.listarDenun()
        setEventos(r)
        Loading()
    }

    async function Pesquisar(){
        let r = await api.BuscarDen(busca)
        setEventos(r)
    }


    useEffect(
        () => {SobreSite() }, [] 
    );  

    return(
        <BoxStyled >
            <h1>Denúncias</h1>
            <div className="pesquisar">
                <input type="text" value={busca} onChange={(e) => setBuscar(e.target.value)} placeholder="PESQUISAR POR PALAVRAS CHAVES..."/>
                <button className="btm-pesquisar" onClick={() => Pesquisar()}><img src="/assets/images/administrador/icons8-search.svg"alt="erro"/></button>
            </div>
            <table className="tabela-denun">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th >Denúncia</th>
                        <th>D Ativa</th> 
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
                            <td>{item.bt_ativo === true ? 'Ativa' : 'Inativa'}</td>
                            <td className="coluna-acao">
                                
                                <Link to={{pathname:"/administrador", state: item}}>
                                    <button>Alterar</button>
                                </Link>
                                    <button>Visualizer</button>
                                
                            </td>
                        </tr>
                    )} 
                </tbody>
            </table>
        </BoxStyled>
    )
}