import { Container } from "./styled";
import Menu from "../../components/commum/menu";
import {MenuLeft} from '../../components/commum/detalhes-denuncia/'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Mensagem from   '../../components/commum/detalhes-denuncia/mensage'
import Caracters from '../../components/commum/detalhes-denuncia/caracter'
import Map from './MapaDetalhes.js'


export default function Pag(props){
    let denuncia = props.location.state

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
                            <Route path="/denuncia-details/caracters" exact={true} render={() => <Caracters caracter={denuncia.vestimento}/>}/>
                            <Route path="/denuncia-details/map" exact={true} component={Map} />
                        </Switch>
                   </div>
                   </BrowserRouter>
                </div>
            </div>
        </Container>
    )
}