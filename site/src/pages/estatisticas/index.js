import Containers from './styled.js';
import Menu from '../../components/menu'



var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
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
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});
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