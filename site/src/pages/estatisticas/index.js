import Containers from './styled.js';
import Menu from '../../components/menu';
import { useState, useEffect } from 'react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BarChart, Graf2,  Graf3 } from './grafico.js';
import EstC from '../../components/commum/item-carrossel/index'



export default function Estatisticas (){

    const [eventos, setEventos] = useState([]);


    function SobreSite(){
    

        const apiResponse = [
            {
             titulo: "Bairros com maiores números de denúncias" 
            },

            {
                titulo: "Cidades com maiores números de denúncias" 
            },
            {
                titulo: "Porcentagem de denúncias mensais no site" 
            }
        ]
        setEventos(apiResponse)
    }
 
    useEffect(
        () => {SobreSite() }, [] 
    )
 
    let v = 0
    function GraC (){
        v=v+1
        switch(v){case 1: return <BarChart/>; case 2: return <Graf2/>;  default: return <Graf3/>;}
    }

    console.log(v)

    return(
        <Containers>
            <Menu/>
            <div class="titulo"> Estatísticas </div>
            <div className="carrousel1">
                <Carousel >
                    {eventos.map ((i, x) =>  <EstC  cgrafico = {true}  titulo = {i.titulo} grafico = {GraC()} /> )}
                  
                </Carousel>
             </div>
        </Containers>
    )
}