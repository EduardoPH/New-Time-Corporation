
import React, {useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import {Fundo} from '../../components/styled/background/styled';

import ContainerApoio from './styled.js';
import Caixa from '../../components/commum/item-carrossel';
import Menu from '../../components/commum/menu';

import { Loading } from "react-loading-ui";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Api from '../../services/apoio.js';
const api = new Api()

export default function Apoio (){

    const [eventos, setEventos] = useState([]);

    async function SobreSite(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
          });
      
        const apiResponse = await api.listarFrase() 
        setEventos(apiResponse)
        
        Loading()
    };

    useEffect(
        () => {SobreSite() }, [] 
    );
    return(
        <Fundo height="100vh">
        <ContainerApoio>
            <Menu/>
            <div class="oi">
            <div class="titulo">ligue 180 - violência doméstica / 100 - direitos humanos</div>
            
            <div class="carrousel1">
                <Carousel autoPlay infiniteLoop>
                    {eventos.map(i => <Caixa frase = {i.frase} cgrafico = {false}/>)}
                </Carousel>
                </div>
            </div>
        </ContainerApoio>
        </Fundo>
    )
}
