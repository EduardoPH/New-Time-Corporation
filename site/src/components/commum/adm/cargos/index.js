import BoxStyled from "./styled";
import ItemAdm from './item-adm/';

import Cookies from 'js-cookie';
import { Loading } from 'react-loading-ui';
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../../services/adm.js'
const api = new Api()

function logado(navigation) {
    let admlogado = Cookies.get('admlogado')
    if( admlogado !== undefined ){
        navigation.push('/administrador')
    } 
} 

export default function Index(){

    const navigation = useHistory()
    
    logado(navigation)

    const [eventos,    setEventos] = useState([]);
    const [nome,       setNome]  = useState('');
    const [senha,      setSenha] = useState('');
    const [idAlterado, setIdAlterado] = useState(0);

    async function listarAdm(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
        
        let r = await api.ListarAdms()
        setEventos(r)

        setTimeout(() => {
            Loading();
          }, 100)
    };

    async function cadastrarAdm(){
        if(idAlterado === 0){
            let r = await api.cadastrarAdm(nome, senha)
            if(r.erro){
                toast.error(r.erro)
            } else {
                toast.success('Novo Administrador Cadastrado com sucesso')
                LimparDados()
            }   
        } else {
            let r = await api.alterarAdm(idAlterado, nome, senha)
            
            if(r !== "OK"){
                toast.error('Houve um erro na Alteração')
            } else {
                toast.success('Alteração Feita com sucesso')
                LimparDados()
            }
        }
    }

    function deletarAdm(admin){
        confirmAlert({
            title: 'Remover Administrador',
            message: `Tem certeza que deseja remover o Administrador: " ${admin.nome} "`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.deletarAdm(admin.id)
                        if(r !== "OK"){
                            return toast.error('Houve um erro')
                        } else {
                            toast('Administrador removido com sucesso!')
                            listarAdm()
                        }
                    }
                },
                {label: 'Não'}
            ]
        })
    }

    function LimparDados(){
        setNome("")
        setSenha("")
        setIdAlterado(0)
        listarAdm()
    }

    
    function Alterar(info){
        setSenha(info.senha);
        setNome(info.nome)
        setIdAlterado(info.id)
    }

    
    useEffect(
        () => {listarAdm()}, [] 
    );
    return(
        <BoxStyled>
            <ToastContainer/>
            <h1>Administradores</h1>
            <div className="box-adm">
                <div className="cadastrados">
                    {eventos.map(item => <ItemAdm alterar={Alterar}  excluir={deletarAdm} info={item}/>)}       
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
                    <button onClick={cadastrarAdm} className={idAlterado === 0 ? "Cadastrar" : "Alterar"}   > {idAlterado === 0 ? "Cadastrar" : "Alterar"} </button>
                </div>
            </div>
        </BoxStyled>
    )
}