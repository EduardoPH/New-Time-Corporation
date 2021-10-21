import {Container} from './styled'
import InfoUsuaria from '../../components/Info-Usuaria'
import ItemDenuncia from '../../components/Item-Denuncia-Usu'
import {Fundo} from '../../components/commum/background/styled'
import Menu from '../../components/menu'

export default function PerfilUsuaria(){
    
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
                            <p1>Usuária 5456486</p1>
                        </div>
                        <h2>Denúncias</h2>
                        <button>   Sair da Conta </button>
                    </div>
                    <div className="parte-final-box">
                        <InfoUsuaria displayNome="none"/>
                        <div className="denunciasCadastradas">
                            <ItemDenuncia descricao="aaaaaaaaaaaaaa" data="20/09/2021"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </Fundo>
    )
}
