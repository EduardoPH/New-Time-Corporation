import {Container} from './styled'
import InfoUsuaria from '../../components/Info-Usuaria'
import ItemDenuncia from '../../components/Item-Denuncia-Usu'
import {Fundo} from '../../components/commum/background/styled'
import Menu from '../../components/menu'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Cookies from 'js-cookie'
import { Loading } from 'react-loading-ui'
import Api from '../../services/api'
const api = new Api();

function VerLogado(navigation){

    let c = Cookies.get('usuariaLogada') 
    
    
    if(c === null){
        navigation.push('/login')
        return null;
    }
    let usuaria = JSON.parse(c)
    
    return usuaria
}


export default function PerfilUsuaria(){
      
    
    const navigation = useHistory();
    
    let i = VerLogado(navigation)
    const [info, setInfo] = useState(i)
    
    const [denun, setDenun] = useState([])
    
    async function BuscaDenu(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
        });
    
        let r = await api.denUsu(info.id_usuario)
        if(r[0] === undefined){
            Loading()
            setDenun([{erro: 'Voce não possue nenhuma denúncia cadastrada'}])
        } else {
            Loading()
            setDenun(r)
        }

       
    }

    useEffect(
        () => {
    
            BuscaDenu();
        }, [] 
    ); 
    
    const sair = () => {Cookies.remove('usuariaLogada'); navigation.push("/home")}
    
    return(
        <Fundo height="100vh">
        <Container>
            <Menu/>
            <div className="corpo-central">
                <h1>Perfil da Usuária</h1>
                <div className="box">
                    <div className="cabecalho">
                        <div className="infos-usuarias">
                            <img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                            <p1> {info.nm_usuario} </p1>
                        </div>
                        <h2>Denúncias</h2>
                        <button onClick={sair}>   Sair da Conta </button>
                    </div>
                    <div className="parte-final-box">
                        <div className="denunciasCadastradas">
                            {denun.map( i =>
                             {
                                if(i.erro){
                                    return 'Voce ainda não possui nenhuma denuncia'
                                } else{
                                    return( <ItemDenuncia info={i}/>)                             
                                }
                             }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </Fundo>
    )
}
