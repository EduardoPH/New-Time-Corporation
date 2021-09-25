import {Conteiners} from "./styled"
import Menu from "../../components/menu"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return(
        <Conteiners> 

            <Menu/>
            <Carousel>
          <div className="box"> 
                <div className="box-sub1"> 
                    <h1> Denuncie!</h1>
                </div>

                <div className="box-sub2"> 
                    <img src="/assets/images/home/woman.svg"  alt="" />
                </div>       
           </div>
            

        <div className="box2"> 
            <div className="caixa2">
                <div className="box2-sub1"> 
                <h1> Apoio </h1>
                </div>

                <div className="box2-sub2"> 
                    <img src="/assets/images/home/apoio.svg"  alt="" />
                </div>
           </div>
        

           <div className="descri-2"> 
            <p> Nos preocupamos com todas as mulheres, por isso trouxemos uma coletânea 
                de frases e apoio psicológico.</p>
           </div>
        </div>
  
          <div className="box3"> 
            <div className="caixa3">
                <div className="box3-sub1"> 
                  <h1> Estastística </h1>
                </div>

                <div className="box3-sub2"> 
                    <img src="/assets/images/home/estatistica.svg"  alt=""/>
                </div>
           </div>
        
           <div className="descri-3"> 
            <p> Com nossos dados é possível montarmos estatíticas para que assim facilite o 
                levantamento de dados </p>
           </div>
        </div>  

         <div className="box4"> 
            <div className="caixa4">
                <div className="box4-sub1"> 
                <h1> Sistema de Denuncias </h1>
                </div>

                <div className="box4-sub2"> 
                    <img src="/assets/images/home/sistema.svg"  alt=""/>
                </div>
           </div>
        
           <div className="descri-4"> 
              <p> Trazemos um sistema de denúncias para as mulhers que sofreram qualquer forma de assédio </p>
           </div>
        </div>   

        </Carousel>

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