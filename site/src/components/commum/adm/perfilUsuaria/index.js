import { useEffect, useState } from 'react';
import InfoUsuaria from '../../../Info-Usuaria/';
import ItemDenuncia from '../../../Item-Denuncia-Usu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Api from '../../../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
const api = new Api();

export default function Index(props){
    const [eventos, setEventos] = useState(props.location.state);
    const navegacao = useHistory();
    const excluir = async() =>{
        confirmAlert({
            title: 'Remover Usuaria',
            message: `Tem certeza que deseja remover a usuaria ${eventos.nm_usuario}`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.deletarUsu(eventos.id_usuario)
                        if(r.erro){
                            toast.error(r.erro)
                        } else {
                            toast.success('Excluido com sucesso')
                            navegacao.push('/administrador/usuaria') 
                        }
                    }
                },
                {label: 'Não'}
            ]
        })
    }
    return(
        <div style={{width: '100%'}}>
            <ToastContainer/>
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
                    onClick={() =>excluir(eventos.id_usuario )}
                    >Excluir Conta</button>
                </div>
            </div>
        </div>
    )
}