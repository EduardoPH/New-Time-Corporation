import Containers from './styled.js';

export default function Estatisticas (){
    return(
        <Containers>
            <div class="dados">
            <div class="titulo"> Estatísticas </div>
            <div class="caixa">
                <div class="setEsquerda"><img src="/assets/images/estatisticas/setEsquerda.svg" alt=""/></div>
                <div class="centro">
                    <div class="subT">Bairros com maior número de denúncias</div>
                    <div class="tabLad">
                        <div class="porcentagem"><img src="/assets/images/estatisticas/porcentagem 2.svg" alt=""/></div>
                        <div class="dados"></div>
                    </div>
                </div>
                <div class="setDireita"><img src="/assets/images/estatisticas/setDireita.svg" alt=""/></div>
            </div>

            <div class="caixa">
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
            </div>
            </div>


        </Containers>

    )
}