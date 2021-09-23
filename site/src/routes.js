import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./components/menu/index";
import Estatisticas from './pages/estatisticas';
import Administrador from './pages/Administrador';
import DenunciasRecents from './pages/Denuncias-recentes'
import DenunciaDetalhada from './pages/denuncia-detalhe'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/estatisticas"  component={Estatisticas} />
                <Route path="/administrador"  component={Administrador} />
                <Route path="/denuncia-recents"  component={DenunciasRecents} />
                <Route path="/denuncia-details" component={DenunciaDetalhada}/>
            </Switch>
        </BrowserRouter>

    )
}
