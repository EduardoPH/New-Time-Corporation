import Menu from '../../components/menu/index';
import { Container } from './styled';
import  MenuLateral  from '../../components/menu-adm/index';
export default function Administrador(){
    return(
        <Container>
            <div className="Top-Adm">
                Menu Administrativo
            </div>
            <Menu/>
            <div className="validar-apoio">
                    <MenuLateral/>
                    <div className="b">
                        <div className="box-apoio">
                            <h1>Administrar Frases de Apoio</h1>
                            
                            <div className="lista-frase">
                                <div className="item">
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
                    </div>
                </div>
            </div>
            
        </Container>
    )
}