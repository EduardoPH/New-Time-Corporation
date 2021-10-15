import { useEffect, useState } from 'react';
import InfoUsuaria from '../../../Info-Usuaria/';
import ItemDenuncia from '../../../Item-Denuncia-Usu';
export default function Index(props){
    const [eventos, setEventos] = useState(props.location.state.item);
   
    return(
        <div style={{width: '100%'}}>
            <div className="box-infor-user">
                <InfoUsuaria info={eventos} displayButton="none"/>
                <div className="denunciasCadastradas">
                    <ItemDenuncia descricao={eventos.denuncia} data={eventos.data}/>
                </div>
            </div>
        </div>
    )
}