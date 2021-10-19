import { useEffect, useState } from 'react';
import InfoUsuaria from '../../../Info-Usuaria/';
import ItemDenuncia from '../../../Item-Denuncia-Usu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function Index(props){
    const [eventos, setEventos] = useState(props.location.state);
    
    const excluir = async(id) =>{
        confirmAlert({
            title: 'Remover Usuaria',
            message: `Tem certeza que deseja remover a usuaria ${eventos.nome}`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        alert('apagou' + eventos.nome)
                    }
                },
                {label: 'Não'}
            ]
        })
    }
    return(
        <div style={{width: '100%'}}>
            <div className="box-infor-user">
                <InfoUsuaria info={eventos} displayButton="none"></InfoUsuaria>
                <div className="denunciasCadastradas">
                    <ItemDenuncia descricao={eventos.denuncia} data={eventos.data}/>
                    <button className="btm-excluir" 
                    style={{ height: '25%', 
                             background: 'red',
                             border: 'solid', 
                             color: 'white', 
                             borderRadius: '13px',
                             cursor: 'pointer',
                             }}
                    onClick={() =>excluir(eventos.id )}
                    >Excluir Conta</button>
                </div>
            </div>
        </div>
    )
}