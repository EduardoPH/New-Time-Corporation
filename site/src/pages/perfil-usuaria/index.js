import React from 'react'
import Cookies from 'js-cookie'
import {Container} from './styled'
import { useHistory } from 'react-router'
import { Loading } from 'react-loading-ui'
import { useEffect, useState } from 'react'
import Menu from '../../components/commum/menu'
import {Fundo} from '../../components/styled/background/styled'
import ItemDenuncia from '../../components/commum/Item-Denuncia-Usu'
import InfoUsuaria from '../../components/commum/Info-Usuaria'
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';


import Api from '../../services/adm'
const api = new Api();

function VerLogado(navigation){

    let c = Cookies.get('usuariaLogada') 
    if(c === null){
        navigation.push('/login')
        return null;
    }
    let usuaria = JSON.parse(c)
    return usuaria
}


export default function PerfilUsuaria(){
      
    
    const navigation = useHistory();
    
    let i = VerLogado(navigation)
    const [info] = useState(i)
    
    const [denun, setDenun] = useState([])
    
    async function BuscaDenu(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
        let r = await api.BuscarDenuncia(info.idUsu)
        if(r[0] === undefined){
            Loading()
            setDenun([{erro: 'Voce não possue nenhuma denúncia cadastrada'}])
        } else {
            Loading()
            setDenun(r)
        }  
    }

      function alterar(dados) {
        let local = dados.id_local_infoc_ntc_local
        let caracteristicas =  dados.id_fisico_infoc_ntc_caracteristica_fisica
        let vestimenta =  dados.vestimento

        let r = {
            caracteristicas:{
                pele: caracteristicas.pele ,
                cabelo: caracteristicas.cabelo ,
                corCabelo: caracteristicas.corCabelo ,
                complemento: caracteristicas.complemento 
            },
            vestimenta:{
                parteCima: vestimenta.partSuperior,
                parteBaixo: vestimenta.partInferior,
                calcado:  vestimenta.calcado,
                complemento: vestimenta.complemento
            },
            local:{
                lat: local.lat,
                lgn: local.lgn,
                cidade: local.cidade,
                bairro: local.bairro
            },
            complemento: dados.depoimento,
            idDen: dados.id
        }
        Cookies.set('dadosDenuncia', JSON.stringify(r))
        navigation.push('/formulario')
    } 

    function excluir(id){
        confirmAlert({
            title: 'Remover denúncia',
            message: `Tem certeza que deseja remover sua denúncia"`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.deletarDen(id)
                        if(r !== "OK"){
                            return toast.error('Houve um erro')
                        } else {
                            toast('denúncia removida com sucesso!')
                            BuscaDenu()
                        }
                    }
                },
                {label: 'Não'}
            ]
        })
    }


    useEffect(
        () => {
            BuscaDenu();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [] 
    ); 
    
    const sair = () => {Cookies.remove('usuariaLogada'); Cookies.remove('dadosDenuncia'); navigation.push("/login")}
    console.log(denun)
    return(
        <Fundo height="100vh">
        <ToastContainer/>
        <Container>
            <Menu/>
            <div className="corpo-central">
                <h1>Perfil da Usuária</h1>
                <div className="box">
                    <div className="cabecalho">
                        <div className="infos-usuarias">
                            <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                            <p1> {info.nome} </p1>
                        </div>
                        <h2>Denúncias</h2>
                        <button onClick={sair}>   Sair da Conta </button>
                    </div>
                    <div className="parte-final-box">
                        <InfoUsuaria info={info}/>
                        <div className="denunciasCadastradas">
                            {denun.map( i =>
                             {
                                if(i.erro){
                                    return 'Voce ainda não possui nenhuma denuncia'
                                } else{
                                    return( <ItemDenuncia ex={excluir} alt={alterar} info={i}/>)                             
                                }
                             }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </Fundo>
    )
}
