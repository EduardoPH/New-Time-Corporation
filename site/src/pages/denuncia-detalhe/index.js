import { Container } from "./styled";
import Menu from "../../components/commum/menu";
import {MenuLeft} from '../../components/commum/detalhes-denuncia/'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Mensagem from   '../../components/commum/detalhes-denuncia/mensage'
import Caracters from '../../components/commum/detalhes-denuncia/caracter'
import Map from './MapaDetalhes.js'
import {  Buttons } from "../../components/styled/buttonlogin-cadastro/index.js";
import { useHistory, Link} from "react-router-dom";





export default function Pag(props){
    let denuncia = props.location.state
    console.log()
    


    function logado(navigation) {
        if(denuncia === null || denuncia === undefined)
            navigation.push('/denuncia-recentes')
        }

        const navigation = useHistory()

        logado(navigation)

    return(

        
        <Container>
            <Menu  className="menu"/>
            <div className="dt-base">
                <div className="titulo"> Denúncia </div>
                <div className="dt-conteudo"> 
                    <BrowserRouter>
                    <div className="pt-menuLeft"> 
                        <MenuLeft/>
                    </div>

                    <div className="pt2-body">
                        <Switch> 
                            <Route path="/denuncia-details" exact={true} render={() => <Mensagem msg={denuncia.msg} nome={denuncia.id_usuario_infoc_ntc_usuario.nome}/>}/>
                            <Route path="/denuncia-details/caracters" exact={true} render={() => <Caracters caracter={denuncia.vestimento} depoimento={denuncia.id_fisico_infoc_ntc_caracteristica_fisica}/>}/>
                            <Route path="/denuncia-details/map" exact={true} render={() => <Map info={denuncia && denuncia.id_local_infoc_ntc_local}/>} />
                        </Switch>

                   </div>
                   </BrowserRouter>

                   <Link to='/denuncia-recentes'>  <Buttons position='absolute' right='2em' top='2em' valor="Voltar" width="13em" /> </Link>
                </div>
            </div>
        </Container>
    )
}