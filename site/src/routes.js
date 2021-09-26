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


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/estatisticas"  component={Estatisticas} />
                <Route path="/administrador"  component={Administrador} />
                <Route path="/denuncia-recentes"  component={DenunciasRecents} />
                <Route path="/denuncia-details" component={DenunciaDetalhada}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={PerfilUsuaria}/>
                <Route path="/apoio" component={Apoio}/>
                <Route path="/formulario" component={caracteristicas}/>
                <Route path="/formulario2" component={depoimento}/>
                <Route path="/formulario3" component={Local}/>
                <Route path="/formulario4" component={vestimentas}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>

    )
}
