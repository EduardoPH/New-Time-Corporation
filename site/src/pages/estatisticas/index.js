import Containers from './styled.js';
import Menu from '../../components/menu'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));







export default function Estatisticas (){
    return(
        <Containers>
            <Menu/>
            <div class="dados">
            <div class="titulo"> Estatísticas </div>
            <div class="caix">
              <div class="setEsquerda"><img src="/assets/images/estatisticas/setEsquerda.svg" alt=""/></div>
              <div class="caixa">
                <div class="centro">
                    <div class="subT">Bairros com maior número de denúncias</div>
                    <div class="tabLad">
                        <div class="porcentagem"><img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/></div>
                        <div class="dados"></div>
                    </div>
                </div>
              </div>
                <div class="setDireita"><img src="/assets/images/estatisticas/setDireita.svg" alt=""/></div>
            </div>

           {/*  <div class="caixa">
                <div class="centro">
                    <div class="subT">Cidades com maior número de denúncias</div>
                    <div class="tabLad">
                        <div class="porcentagem"><img src="/assets/images/estatisticas/porcentagem 2.svg"  alt=""/></div>
                        <div class="dados"></div>
                    </div>
                </div>
            </div>

            <div class="caixa">
                <div class="centro">
                    <div class="subT">Porcentagem de denúncias mensais no site</div>
                    <div class="tabLad">
                        <div class="porcentagem"><img src="/assets/images/estatisticas/porcentagem 2.svg"  alt=""/></div>
                        <div class="dados"></div>
                    </div>
                </div>
            </div> */}
            </div>


        </Containers>

    )
}