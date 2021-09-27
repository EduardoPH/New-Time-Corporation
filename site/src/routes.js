import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home";
import Estatisticas from './pages/estatisticas';
import Administrador from './pages/Administrador';
import DenunciasRecents from './pages/Denuncias-recentes'
import DenunciaDetalhada from './pages/denuncia-detalhe'
import Login from './pages/login'
import PerfilUsuaria from './pages/perfil-usuaria'
import Apoio from './pages/Apoio';
import caracteristicas from './pages/Formulario/Formulario-caracteristicas';
import depoimento from './pages/Formulario/Formulario-depoimento';
import Local from './pages/Formulario/Formulario-local';
import vestimentas from './pages/Formulario/Formulario-vestimentas';
import Cadastro from './pages/Cadastro';
import MyLocation from './components/map/MyLocation'
import Maps from './components/map/map.js'



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/estatisticas" exact={true} component={Estatisticas} />
                <Route path="/administrador" exact={true} component={Administrador} />
                <Route path="/denuncia-recentes" exact={true} component={DenunciasRecents} />
                <Route path="/denuncia-details" exact={true} component={DenunciaDetalhada}/>
                <Route path="/login" exact={true} component={Login}/>
                <Route path="/perfil"exact={true} component={PerfilUsuaria}/>
                <Route path="/apoio" exact={true} component={Apoio}/>
                <Route path="/formulario" exact={true} component={caracteristicas}/>
                <Route path="/formulario2" exact={true} component={depoimento}/>
                <Route path="/formulario3" exact={true} component={Local}/>
                <Route path="/formulario4" exact={true} component={vestimentas}/>
                <Route path="/cadastro" exact={true} component={Cadastro}/>
                <Route path="/map" exact={true} component={MyLocation}/>
                <Route path="/map-render" exact={true} component={Maps}/>
            </Switch>
        </BrowserRouter>

    )
}
