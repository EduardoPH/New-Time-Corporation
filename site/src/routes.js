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
import TelaRoteamento from './pages/telaRoteamento';
import Map from './components/map/map.js';
import RecSenha from './pages/recSenha/';
import Formulario from './pages/Formulario';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={TelaRoteamento}/>
                <Route path="/home"  component={Home} />
                <Route path="/estatisticas"  component={Estatisticas} />
                <Route path="/administrador"  component={Administrador} />
                <Route path="/denuncia-recentes"  component={DenunciasRecents} />
                <Route path="/denuncia-details" component={DenunciaDetalhada}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={PerfilUsuaria}/>
                <Route path="/apoio" component={Apoio}/>
                <Route path="/formulario1" component={caracteristicas}/>
                <Route path="/formulario2" component={vestimentas}/>
                <Route path="/formulario3" component={Local}/>
                <Route path="/formulario4" component={depoimento}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/formulario" component={Formulario}/>
                <Route path="/recuperacao" component={RecSenha}/>
                <Route path="/map-render" component={Map}/>
            </Switch>
        </BrowserRouter>

    )
}
