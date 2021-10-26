import BoxStyled from "./styled";
import ItemFrase from './frase-apoio/';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useState, useEffect } from "react";
import Api from '../../../../services/api'
import { toast, ToastContainer } from "react-toastify";
const api = new Api()
export default function Index(){

    const [eventos, setEventos] = useState([]);
    const [frase, setFrase] = useState('');
    const [idAlterado, setIdAlterado] = useState(0);
    console.log(idAlterado)
    async function frasesGet(){
        const apiResponse = await api.frases()
        setEventos(apiResponse)
    }

    async function FrasesPost(){
        if(idAlterado > 0){
            let r = await api.alterarFrase(idAlterado, frase)
            console.log(r)
            if(r !== "OK"){
                return toast.error(r.erro)
            } else {
                toast.success('Frase Alterada com sucesso!')
                setFrase("")
                setIdAlterado(0)
                frasesGet()
            }
        } else {
            let r = await api.cadastrarFrase(frase)
        
            if(r.erro){
                return toast.error(r.erro)
            } else {
                toast.success('Frase Cadastrada com sucesso!')
                setFrase("")
                setIdAlterado(0)
                frasesGet()
            }
        }
    }
    
    function alterar(frase){
        setIdAlterado(frase.id_frase);
        setFrase(frase.ds_frase)   
    }

    function excluir(frase){
        confirmAlert({
            title: 'Remover Frase',
            message: `Tem certeza que deseja remover a Frase: " ${frase.ds_frase} "`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.removerFrase(frase.id_frase)
                        if(r.erro){
                            return toast.error(r.erro)
                        } else {
                            toast('Frase removida com sucesso!')
                            frasesGet()
                        }
                    }
                },
                {label: 'Não'}
            ]
        })
    }

    useEffect(
        () => frasesGet() , [] 
    )

    return(
    <BoxStyled>
        <ToastContainer/>
        <h1>Administrar Frases de Apoio</h1>                      
        <div className="lista-apoio">
            {eventos.map(item => <ItemFrase frase={item} Excluir={excluir} Alterar={alterar}/>)}
        </div>
        <div className="input-frase">
            <input type="text" placeholder="Digite uma nova frase..." value={frase} onChange={e => setFrase(e.target.value)}/>
            <button className={idAlterado === 0 ? "btm": "btmAlt"} onClick={() => FrasesPost()}>{idAlterado === 0 ? "Cadastrar": "Alterar"}</button>
        </div>
    </BoxStyled>
    )
}