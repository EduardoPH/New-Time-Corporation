import Menu from '../../components/menu/index';
import { Container, BoxStyled } from './styled';
import  MenuLateral  from '../../components/menu-adm/index';
export default function Administrador(){
    return(
        <Container>
            <div className="Top-Adm">
                Menu Administrativo
            </div>
            <Menu/>
            <div className="boxs">
                <MenuLateral/>
                <div className="box-direita">
                    <BoxStyled className="box-apoio">
                        <h1>Administrar Frases de Apoio</h1>                      
                        <div className="lista-apoio">
                            <div className="item-frase">
                                <p1>
                                    Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.  
                                </p1>
                                <div className="btm-acao">
                                    <button className="alterar">Alterar</button>
                                    <button className="excluir">Excluir</button>
                                </div>
                            </div>
                        </div>
                        <div className="input-frase">
                            <input type="text" placeholder="Digite uma nova frase..."/>
                            <button className="btm-add">Adicionar</button>
                        </div>
                    </BoxStyled>
                    <BoxStyled className="box-usuarias">
                        <h1>Usuárias</h1>
                        <input type="text" placeholder="Pesquisar por usuária..."/>
                        <table className="tabela-usuaria">
                            <thead>
                                <tr>
                                    <td>Nome</td>
                                    <td>E-mail</td>
                                    <td>Telefone</td>
                                    <td>CPF</td>
                                    <td className="coluna-acao"></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                                <tr>
                                    <th>LAI</th>
                                    <th>SDJAOJSDOI@GAMIL,COl</th>
                                    <th>11 94154654</th>
                                    <th>46545646</th>
                                    <th className="coluna-acao"><button>Ver Perfil</button></th>
                                </tr>
                            </tbody>
                        </table>
                    </BoxStyled>
                </div>
            </div>
        </Container>
    )
}