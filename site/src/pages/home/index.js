import {Conteiners} from "./styled"
import Menu from "../../components/commum/menu"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Item from "../../components/commum/home";
import { useState, useEffect } from "react";
export default function Home() {
    const [eventos, setEventos] = useState([]);


    function SobreSite(){
    

        const apiResponse = [
            {
             titulo: "Denuncie!" , legenda:"" ,  imagem:"../../../assets/images/home/woman.svg" 
            },

            {
                titulo: "Apoio" , legenda:"Nos preocupamos com todas as mulheres, por isso trouxemos uma coletânea de frases e apoio psicológico." ,  imagem:"../../../assets/images/home/apoio.svg" 
            },
            {
                titulo: "Estatísticas" , legenda:"Com nossos dados é possível montarmos estatíticas para que assim facilite o levantamento de dados." ,  imagem:"../assets/images/home/estatistica.svg" 
            },
            {
                titulo: "Sistema de Denúncias" , legenda:"Trazemos um sistema de denúncias para as mulhers que sofreram qualquer forma de assédio." ,  imagem:"../assets/images/home/sistema.svg" 
            },
            
        ]
        setEventos(apiResponse)
    }
 
    useEffect(
        () => {SobreSite() }, [] 
    )
 

    return(
        <Conteiners> 
            <div className="parte1">
                <Menu/>

                
                <Carousel> 
                {eventos.map(
                    i=> <Item titulo ={i.titulo } imagem={i.imagem} legenda={i.legenda}/> 
                )}
                </Carousel>
            </div>

           
           



           <div className="rodape"> 
              <div className="contato">
                    <h2> contato </h2>
                    <div className="email"> Email: contato@NTC.com.br</div>
                    <div className="telefone">Telefone: 9999-9999 </div>
                    <div className="endereco"> Endereço: Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, 04773-000 </div>
               </div>

               <div className="recomendacoes">
                    <h2> Recomendacoes </h2>
                    
                 <div className="recomen"> 
                        <div className="lady"> 
                            <img src="/assets/images/home/lady.svg" alt="" />
                            <div className="titulo"> Lady Driver </div>
                            <div className="descricao">Um app que possibilita viagens pagas com motoristas mulhers. </div>
                        </div>  

                        <div className="women">
                            <img src="/assets/images/home/stark.svg" alt=""/>
                            <div className="titulo"> All Women stalk </div>
                            <div className="descricao"> O site traz varios blogs escritos por mulheres para mulheres. </div> 
                        </div>

                        <div className="kahlo"> 
                            <img src="/assets/images/home/khalo.svg" alt=""/> 
                            <div className="titulo"> Não Me Kahlo </div>
                            <div className="descricao">  blog foi criado para expandir “a palavra” feminista a mais mulheres. </div>
                        </div>
                    </div>
                </div>
           </div>
        </Conteiners>
    )
}