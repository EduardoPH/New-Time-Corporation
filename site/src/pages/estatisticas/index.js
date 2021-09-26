import Containers from './styled.js';
import Menu from '../../components/menu'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BarChart, Graf2,  Graf3 } from './grafico.js';




export default function Estatisticas (){

 

    return(
        <Containers>
            <Menu/>
            <div class="titulo"> Estatísticas </div>
            <Carousel >
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Bairros com maiores números de denúncias </div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <BarChart/>
                    
                </div> 
                <div class="caixa2">
                    <div class="centro">
                        <div class="subT">Cidades com maiores números de denúncias </div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <Graf2/>
                </div> 

                <div class="caixa3">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    < Graf3/>
                </div> 
                
             </Carousel>
        </Containers>

    )
}