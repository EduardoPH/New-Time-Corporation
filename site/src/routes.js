import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home";
import Estatisticas from './pages/estatisticas';
import Administrador from './pages/Administrador';
import DenunciasRecents from './pages/Denuncias-recentes'
import DenunciaDetalhada from './pages/denuncia-detalhe'
import Login from './pages/login'
import PerfilUsuaria from './pages/perfil-usuaria'
import Apoio from './pages/Apoio';
import Cadastro from './pages/Cadastro';
import TelaRoteamento from './pages/telaRoteamento';
import RecSenha from './pages/recSenha/';
import Formulario from './pages/Formulario';
import Code from './pages/recSenha/recSenhaCode'
import New from './pages/recSenha/recSenhaNew';
import LoginAdm from './pages/loginAdm/index';


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
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/formulario" component={Formulario}/>
                <Route path="/recuperacao" component={RecSenha}/>
                <Route path="/code" component={Code} />
                <Route path="/nova-senha" component={New} />
                <Route path="/login-administrador" component={LoginAdm}/>
            </Switch>
        </BrowserRouter>

    )
}
