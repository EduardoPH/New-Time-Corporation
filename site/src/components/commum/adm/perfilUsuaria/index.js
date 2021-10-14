import { useEffect, useState } from 'react';
import InfoUsuaria from '../../../Info-Usuaria/';
import ItemDenuncia from '../../../Item-Denuncia-Usu';
export default function Index(){
    const [eventos, setEventos] = useState([]);


    function SobreSite(){

        const apiResponse = [
            {
               nome: "claudia.",
               email: "CAUDIA@gamilcom",
               tel:"11 9999-999",
               cpf: "11 9999-999"

            }
        ]
        setEventos(apiResponse)
    };
 
    useEffect(
        () => {SobreSite() }, [] 
    );
    return(
        <div style={{width: '100%'}}>
            <div className="box-infor-user">
                {eventos.map(item => <InfoUsuaria info={item} displayButton="none"/>)}
                <div className="denunciasCadastradas">
                    <ItemDenuncia descricao="eeeeeeeeee" data="25/03/2021"/>
                </div>
            </div>
        </div>
    )
}