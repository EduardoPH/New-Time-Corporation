import {Conteiners} from "./styled"



export default function HomeC(props) {

    
    return (
    <Conteiners>
                <div className="box2-sub1"> 
                {props.titulo}
                </div>

                <div className="box2-sub2"> 
                    <img src={props.imagem}  alt="" />
                </div>
        

           <div className="descri-2"> 
            {props.descricao}
           </div>




          {/*  <div className="box2-sub1"> 
                {props.titulo}
                </div>

                <div className="box2-sub2"> 
                    <img src={props.imagem}  alt="" />
                </div>
        

           <div className="descri-2"> 
            {props.descricao}
           </div>







           <div className="box2-sub1"> 
                {props.titulo}
                </div>

                <div className="box2-sub2"> 
                    <img src={props.imagem}  alt="" />
                </div>
        

           <div className="descri-2"> 
            {props.descricao}
           </div> */}
    </Conteiners>
    )
}