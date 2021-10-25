import BoxStyled from "./styled";
import ItemAdm from './item-adm/';
import { useEffect, useState } from 'react';

export default function Index(){
    const [eventos, setEventos] = useState([]);
    const [nome,    setNome]  = useState('');
    const [senha,   setSenha] = useState('')

    function SobreSite(){

        const apiResponse = [
            {
               id: "1",
               nome: "claudia.",
               senha: "CAUDIA" 
            },
            {
                id: "2",
               nome: "claudia.",
               senha: "CAUDIA" 
            },
            {
                id: "3",
               nome: "claudia.",
               senha: "CAUDIA" 
            }
        ]
        setEventos(apiResponse)
    };
 
    useEffect(
        () => {SobreSite() }, [] 
    );

    function Alterar(info){
        setSenha(info.senha);
        setNome(info.nome)
    }
    function Excluir(info){
        alert(info.id)
    }
    return(
        <BoxStyled>
            <h1>Administradores</h1>
            <div className="box-adm">
                <div className="cadastrados">
                    {eventos.map(item => <ItemAdm alterar={Alterar}  excluir={Excluir}info={item}/>)}       
                </div>
                <div className="nv-adm">
                    <h2>Cadastrar novo Administrador</h2>
                    <div className="nv-senha">
                        <p1>
                            Nome :
                        </p1>
                        <input value={nome} onChange={e => setNome(e.target.value)} type="text"/>
                    </div>
                    <div className="nv-senha">
                        <p1>
                            Senha :
                        </p1>
                        <input value={senha} onChange={e => setSenha(e.target.value)} type="text"/>
                    </div>
                    <button> Cadastrar </button>
                </div>
            </div>
        </BoxStyled>
    )
}