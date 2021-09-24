import Containers from './styled.js';
import Menu from '../../components/menu'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Estatisticas (){
    return(
        <Containers>
            <Menu/>
            <div class="dados">
            <div class="titulo"> Estatísticas </div>
            <Carousel autoPlay infiniteLoop >
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                <div class="caixa">
                    <div class="centro">
                        <div class="subT">Porcentagem de denúncias mensais no site</div>
                        <div class="porc-img">
                            <img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/>
                        </div>
                    </div>
                    <img src="/assets/images/estatisticas/image 15.svg" styled={{ width: '43em'}} alt=""/>
                </div> 
                
             </Carousel>
            </div>
        </Containers>

    )
}