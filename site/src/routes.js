import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home";
import Estatisticas from './pages/estatisticas';
import Administrador from './pages/Administrador';
import DenunciasRecents from './pages/Denuncias-recentes'
import DenunciaDetalhada from './pages/denuncia-detalhe'
import Login from './pages/login'
import PerfilUsuaria from './pages/perfil-usuaria'
import Apoio from './pages/Apoio';


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
            </Switch>
        </BrowserRouter>

    )
}
