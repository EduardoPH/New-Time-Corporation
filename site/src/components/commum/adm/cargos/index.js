import BoxStyled from "./styled";
import ItemAdm from './item-adm/';
import { useEffect, useState } from 'react';

export default function Index(){
    const [eventos, setEventos] = useState([]);


    function SobreSite(){

        const apiResponse = [
            {
               nome: "claudia.",
               senha: "CAUDIA" 
            },
            {
               nome: "claudia.",
               senha: "CAUDIA" 
            },
            {
               nome: "claudia.",
               senha: "CAUDIA" 
            }
        ]
        setEventos(apiResponse)
    };
 
    useEffect(
        () => {SobreSite() }, [] 
    );

    return(
        <BoxStyled>
            <h1>Administradores</h1>
            <div className="box-adm">
                <div className="cadastrados">
                    {eventos.map(item => <ItemAdm info={item}/>)}       
                </div>
                <div className="nv-adm">
                    <h2>Cadastrar novo Administrador</h2>
                    <div className="nv-senha">
                        <p1>
                            Nome :
                        </p1>
                        <input type="text"/>
                    </div>
                    <div className="nv-senha">
                        <p1>
                            Senha :
                        </p1>
                        <input type="text"/>
                    </div>
                    <button> Cadastrar </button>
                </div>
            </div>
        </BoxStyled>
    )
}