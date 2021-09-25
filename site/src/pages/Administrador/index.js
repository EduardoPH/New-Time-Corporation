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
                   {/*  <BoxStyled className="box-apoio">
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
                    </BoxStyled> */}
                    {/* <BoxStyled className="box-usuarias">
                        <h1>Usuárias</h1>
                        <input type="text" placeholder="Pesquisar por usuária..."/>
                        <table className="tabela-usuaria">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>CPF</th>
                                    <th className="coluna-acao"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LAI</td>
                                    <td>SDJAOJSDOI@GAMIL,COl</td>
                                    <td>11 94154654</td>
                                    <td>46545646</td>
                                    <td className="coluna-acao"><button>Ver Perfil</button></td>
                                </tr>
                                <tr>
                                    <td>LAI</td>
                                    <td>SDJAOJSDOI@GAMIL,COl</td>
                                    <td>11 94154654</td>
                                    <td>46545646</td>
                                    <td className="coluna-acao"><button>Ver Perfil</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </BoxStyled> */}
                    {/* <BoxStyled>
                        <h1>Administradores</h1>
                        <div className="box-adm">
                            <div className="cadastrados">
                                <div className="adm-cad">
                                    <div className="nome-senha">
                                        <p1>Nome:</p1>
                                        <span>CLAUDIA</span>
                                        <button className="btm-alt">Alterar</button>
                                    </div>
                                    <div className="nome-senha">
                                        <p1>Senha:</p1>
                                        <span>CLAUDIA</span>
                                        <button className="btm-excluir">Excluir</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="nv-adm">
                                <h2>Cadastrar novo Administrador</h2>
                                <div className="nv-senha">
                                    <p1>
                                        Nome :
                                    </p1>
                                    <input type="text"/>
                                </div>
                                <div className="nv-senha">
                                    <p1>
                                        Senha :
                                    </p1>
                                    <input type="text"/>
                                </div>
                                <button> Cadastrar </button>
                            </div>
                        </div>
                    </BoxStyled> */}
                    {/* <BoxStyled className="box-usuarias">
                        <h1>Denúncias</h1>
                        <input type="text" placeholder="PESQUISAR POR PALAVRAS CHAVES..."/>
                        <table className="tabela-usuaria">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th >Denúncia</th>
                                    <th className="coluna-acao"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LAI</td>
                                    <td>11 94154654</td>
                                    <td className="previa">
                                        ato verbal ou escrito pelo qual alguém leva ao conhecimento da autoridade competente um fato contrário à lei, à ordem pública ou a algum regulamento e suscetível de punição.
                                    </td>
                                    <td className="coluna-acao"><button>Ver Denúncia</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </BoxStyled> */}
                    {/* <BoxStyled>
                    <div className="box-infor-user">
                        <div className="informas">
                            <p1>Nome :</p1>
                            <input type="text" disabled value="teste@gamil"/>
                            <p1>Email :</p1>
                            <input type="text" disabled value="teste@gamil"/>
                            <p1>Telefone :</p1>
                            <input type="text" disabled value="teste@gamil"/>
                            <p1>CPF :</p1>
                            <input typpe="text"disabled value="teste@gamil"/>
                         </div>
                        <div className="denunciasCadastradas">
                        <div className="item-denun">
                            <div className="lado-esquerdo">
                                
                                    <p1>HHiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddd</p1>
                               
                                <div className="btms">
                                    <button className="alterar">Alterar</button>
                                    <button className="excluir">excluir</button>
                                </div>
                            </div>
                            <div className="lado-direito">
                                <p1>45/465/654</p1>
                                <p2> Ver mais...</p2>
                            </div>
                        </div>
                    </div>
                    </div>
                    </BoxStyled> */}
                    <BoxStyled>
                        <h1>Validar Denúncia</h1>
                        <div className="box-denuncia">
                            <div className="cabecalho">
                                < img src="/assets/images/denuncias-recentes/Perfil.png" alt=""/>
                                <div className="informacoes-usuaria">
                                    <p1>Carlinhas</p1>
                                    <span> Carlinhas@gamil.com </span>
                                    <span> 11 97897-8765 </span>
                                    <button> Perfil</button>
                                </div>
                            </div>
                            <textarea />
                            <div className="btms-acoes">
                                <button className="excluir">Excluir</button>
                                <button className="alterar">Alterar</button>
                                <button className="validar" >Validar</button>
                            </div>

                        </div>
                    </BoxStyled>
                </div>
            </div>
        </Container>
    )
}