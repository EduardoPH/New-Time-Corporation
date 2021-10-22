import {Container} from './styled'
import InfoUsuaria from '../../components/Info-Usuaria'
import ItemDenuncia from '../../components/Item-Denuncia-Usu'
import {Fundo} from '../../components/commum/background/styled'
import Menu from '../../components/menu'
import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
export default function PerfilUsuaria(){

    const navigation = useHistory();

    const [info, setInfo] = useState(JSON.parse(Cookie.get('usuariaLogada')))

    
    
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
