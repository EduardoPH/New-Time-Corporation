import Container from './styled.js'
import Menu from '../../components/menu'
import { Inputs, Buttons } from '../../components/login-cadastro/index.js'



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
                    <Inputs place="Digite seu nome de Usuário..."/>
                    <div class="gerar-nome">Gerar nome de Usuário</div>
                    <Inputs place="Digite seu numero para contato..."/>
                    <Inputs place="Digite seu email..."/>
                    <Inputs place="Digite sua senha..."/>
                    <Inputs place="Digite novamente sua senha..."/>
                    <Inputs place="DIGITE SEU CPF... (OPCIONAL)"/>
                    <div class="botao"><Buttons valor="Cadastrar" width="25em"/> </div>
                </div>
            </div>
        </Container>
    )
}