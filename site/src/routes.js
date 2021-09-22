import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./components/menu/index";
import Estatisticas from './pages/estatisticas';
import Administrador from './pages/Administrador';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/estatisticas"  component={Estatisticas} />
                <Route path="/administrador"  component={Administrador} />
            </Switch>
        </BrowserRouter>

    )
}
