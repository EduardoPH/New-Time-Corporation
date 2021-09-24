import {Conteiners} from "./styled"
import Menu from "../../components/menu"

export default function Home() {
    return(
        <Conteiners> 

            <Menu/>
          <div className="box"> 
                <div className="box-sub1"> 
                    <h1> Denuncie!</h1>
                </div>

                <div className="box-sub2"> 
                    <img src="/assets/images/home/woman.svg"  alt="" />
                </div>       
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