import {Conteiners} from "./styled"


export default function Home() {
    return(
        <Conteiners> 

            {/* <div className="menu"> </div> */}
          <div className="box"> 
            <div className="box-sub1"> 
                <h1> Denuncie </h1>
            </div>

            <div className="box-sub2"> 
                <img src=""> </img>
            </div>
            
            </div>
            
            
           <div className="rodape"> 
              <div className="contato">
                    <h2> contato </h2>
                    <div className="email"> Email: contato@NTC.com.br</div>
                    <div className="telefone">Telefone: 9999-9999 </div>
                    <div className="endereco"> Endereço: Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP, 04773-000 </div>
               </div>

               <div className="remendacoes">
                    <h2> Recomendacoes </h2>
                    
                    <div className="lady"> 
                        <img src="/assets/image/home/khalo.svg" alt="" > </img>
                        <div className="titulo"> Lady Driver </div>
                        <div className="descricao">Um app que possibilita viagens pagas com motoristas mulhers. </div>
                    </div>  

                    <div className="women">
                        <img src="/assets/image/home/khalo.svg" alt=""> </img>
                        <div className="titulo"> Lady Driver </div>
                        <div className="descricao"> O site traz varios blogs escritos por mulheres para mulheres. </div> 
                    </div>

                    <div className="kahlo"> 
                        <img src="/assets/image/home/khalo.svg" alt=""> </img>
                        <div className="titulo"> Lady Driver </div>
                        <div className="descricao">  blog foi criado para expandir “a palavra” feminista a mais mulheres. </div>
                    </div>
                </div>
           </div>
        </Conteiners>
    )
}