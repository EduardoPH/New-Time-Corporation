import BoxStyled from "./styled";
import Button from '../../../administrador/index';

import { useState, useEffect } from "react";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from 'react-router-dom';

import Mensagem from   '../../../../components/details-denuncia/mensage/';
import Caracters from '../../../../components/details-denuncia/caracter/';
import Map from '../../../../components/map/map'

import Api from '../../../../services/api'
const api = new Api()


export default function Index(props){
    const [eventos, setEventos] = useState([]);
    const [denun, setDenun] = useState('')

    async function listarDenun(){
        let r = await api.validarDenuncia()
        setDenun(r[0].ds_depoimento)
        setEventos(r)        
    } 


    const excluir = async(id) =>{
        confirmAlert({
            title: 'Remover Denúncia',
            message: `Tem certeza que deseja remover esta denúncia ${eventos.snome}`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        alert('apagou ' + eventos.nome)
                    }
                },
                {label: 'Não'}
            ]
        })
    }
    const responsive={
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    useEffect(() => {
        
        listarDenun()
        if(props.location.state !== undefined)
            setEventos([props.location.state]);

    }, []);
    return(
        <BoxStyled>
            <ToastContainer/>
            <h1>Validar Denúncia</h1>
            
            <div className="box-denuncia">
                <div className="cabecalho">
                    <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                    {eventos.map(  i => 
                        <div className="informacoes-usuaria">
                            <p1>   {i.id_usuario_infoc_ntc_usuario.nm_usuario} </p1>
                            <span>  {i.id_usuario_infoc_ntc_usuario.ds_email} </span>
                            <span>  {i.id_usuario_infoc_ntc_usuario.ds_telefone} </span>
                            <Link 
                                to={{
                                pathname:"/administrador/usuaria/perfil", 
                                state:i
                                }}
                            >
                                <button > Perfil</button>
                            </Link>
                        </div>
                    )}
                </div>
                <Carousel 
                    responsive={responsive}
                >
                    <textarea value={denun}  onChange={  e => setDenun(e.target.value)}/>
                    <Caracters className="carateristicas"/>
                    <div className="map">
                        <Map className="mapas"/>
                    </div>
                </Carousel>
                <div className="btms-acoes">
                    <Button type="alterar" width="16em"/> 
                    <button className="excluir" onClick={() => excluir(eventos.id)}>Excluir</button>
                    <button className="adicionar" > adicionar</button>
                </div>
            </div>
        </BoxStyled>
    )
}