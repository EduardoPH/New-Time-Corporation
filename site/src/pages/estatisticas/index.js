import Containers from "./styled.js";
import Menu from "../../components/menu";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BarChart, Graf2, Graf3 } from "./grafico.js";

export default function Estatisticas() {
  return (
    <Containers>
      <Menu />
      <div class="titulo"> Estatísticas </div>
      <div className="carrousel1">
        <Carousel infiniteLoop autoPlay>
          <div className="caixa">
            <div class="centro">
              <div class="subT">Bairros com maiores números de denúncias </div>
              <div class="porc-img">
                <img
                  src="/assets/images/estatisticas/porcentagem 2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="grafico">
              <BarChart />
            </div>
          </div>

          <div className="caixa">
            <div class="centro">
              <div class="subT">Cidades com maiores números de denúncias</div>
              <div class="porc-img">
                <img
                  src="/assets/images/estatisticas/porcentagem 2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="grafico">
              <Graf2 />
            </div>
          </div>

          <div className="caixa">
            <div class="centro">
              <div class="subT">Porcentagem de denúncias mensais no site </div>
              <div class="porc-img">
                <img
                  src="/assets/images/estatisticas/porcentagem 2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="grafico">
              <Graf3 />
            </div>
          </div>
        </Carousel>
      </div>
    </Containers>
  );
}
