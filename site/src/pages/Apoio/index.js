import ContainerApoio from './styled.js';
import Menu from '../../components/menu'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Apoio (){
    return(
        <ContainerApoio>
            <Menu/>
            <div class="oi">
            <div class="titulo">ligue 180 - violência doméstica / 100 - direitos humanos</div>
            
            <div class="carrousel1">
                <Carousel autoPlay infiniteLoop>
                    <div class="caixa">
                        <div class="frases"> Você teve a coragem de fazer uma denúncia, encontrou forças para se posicionar contra esse ato desumano e poderá recuperar sua tranquilidade. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Olha quanta coisa você superou. Repara o caminho que percorreu. Tantos obstáculos transpassados. Tanto aprendizado. Por meio de seus esforços você tem crescido e evoluído. Há tanto ainda para ser vivido. Tem tanta coisa boa te esperando lá na frente. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Você é mais forte do que imagina, mais bonita do que enxerga mais capaz do que dizem. Você é maravilhosa. </div>
                    </div>
                </Carousel>
                </div>
            </div>
        </ContainerApoio>



    )
}
