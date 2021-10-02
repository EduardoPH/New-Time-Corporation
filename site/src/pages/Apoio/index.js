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
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                    <div class="caixa">
                        <div class="frases"> Está tudo bem não se sentir forte o tempo todo, você não precisa se culpar por isso. Está tudo bem não estar sorrindo o tempo todo. Precisamos dos momentos “só nossos” para refletirmos sobre tudo o que vivemos. Afinal, tudo é uma questão de aprendizado e evolução interior. </div>
                    </div>
                </Carousel>
                </div>
            </div>
        </ContainerApoio>



    )
}
