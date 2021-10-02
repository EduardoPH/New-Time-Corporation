import Container from './styled.js'
import Menu from '../../components/menu'



export default function Cadastro (){
    return(

        <Container>
            <Menu/>
            <div class="conteudo">
                <div class="left-conteudo">
                    <div class="imagem"><img src="../assets/images/cadastro/img-cadastro.svg" alt=""/></div>
                    <div class="textos">
                        <div class="titulo">No Cadastro:</div>
                        <div class="texto-1">Mantemos seus dados totalmente seguros </div>
                        <div class="texto-2">Geramos uma identidade anônima  para você</div>
                        <div class="texto-3">Mantemos de forma discreta nossas Ligações, não precise se preocupar, pois ligaremos como uma empresa a oferecer um contrato de serviço</div>
                    </div>
                </div>
                <div class="formulario">
                    <div class="titulo-form">Cadastro</div>
                    <input type="text" placeholder="Digite seu nome de Usuário..."/>
                    <div class="gerar-nome">Gerar nome de Usuário</div>
                    <input type="text" placeholder="Digite seu número para contato..."/>
                    <input type="text" placeholder="Digite seu Email..."/>
                    <input type="text" placeholder="Digite sua Senha..."/>
                    <input type="text" placeholder="Digite novamente sua Senha..."/>
                    <input type="text" placeholder="Digite seu CPF...(OPCIONAL)"/>
                    <div class="botao"><button>Cadastrar</button></div>
                </div>
            </div>
        </Container>
    )
}