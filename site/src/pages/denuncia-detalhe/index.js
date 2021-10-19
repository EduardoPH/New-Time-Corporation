import { Container } from "./styled";
import Menu from "../../components/menu";
import {MenuLeft} from '../../components/details-denuncia'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Mensagem from   '../../components/details-denuncia/mensage'
import Caracters from '../../components/details-denuncia/caracter'
import Map from './MapaDetalhes.js'


export default function Pag(){
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
                            <Route path="/denuncia-details" exact={true} render={() => <Mensagem/>}/>
                            <Route path="/denuncia-details/caracters" exact={true} component={Caracters}/>
                            <Route path="/denuncia-details/map" exact={true} component={Map} />
                        </Switch>
                   </div>
                   </BrowserRouter>
                </div>
            </div>
        </Container>
    )
}