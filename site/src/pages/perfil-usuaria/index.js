import {Container} from './styled'
import InfoUsuaria from '../../components/Info-Usuaria'
import ItemDenuncia from '../../components/Item-Denuncia-Usu'
import {Fundo} from '../../components/commum/background/styled'
import Menu from '../../components/menu'
import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'

export default function PerfilUsuaria(props){
    const [info, setInfo] = useState({})
    
    function carregarUsuaria(){
        return setInfo(JSON.parse(Cookie.get('usuariaLogada')))
    }


    useEffect(carregarUsuaria,[])
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
                            <p1>{info.nm_usuario}</p1>
                        </div>
                        <h2>Denúncias</h2>
                        <button>   Sair da Conta </button>
                    </div>
                    <div className="parte-final-box">
                        <InfoUsuaria displayNome="none" info={info}/>
                        <div className="denunciasCadastradas">
                            <ItemDenuncia descricao={info.denuncia} data={info.data}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </Fundo>
    )
}
