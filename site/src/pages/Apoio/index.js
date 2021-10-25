import ContainerApoio from './styled.js';
import Menu from '../../components/menu'
import {Fundo} from '../../components/commum/background/styled'
import React, {useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Caixa from '../../components/commum/item-carrossel'
import Api from '../../services/api'
const api = new Api()

export default function Apoio (){

    const [eventos, setEventos] = useState([]);


    async function SobreSite(){
        
        const apiResponse = await api.frases() 
        
        setEventos(apiResponse)
    };
 
    useEffect(
        () => {SobreSite() }, [] 
    );


    console.log(eventos)
    return(
        <Fundo height="100vh">
        <ContainerApoio>
            <Menu/>
            <div class="oi">
            <div class="titulo">ligue 180 - violência doméstica / 100 - direitos humanos</div>
            
            <div class="carrousel1">
                <Carousel autoPlay infiniteLoop>
                    {eventos.map(i => <Caixa frase = {i.ds_frase} cgrafico = {false}/>)}
                </Carousel>
                </div>
            </div>
        </ContainerApoio>
        </Fundo>
    )
}
