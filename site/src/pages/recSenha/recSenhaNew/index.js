import {Container} from './styled'
import MenuTop from '../../../components/commum/menu'
import { Buttons, Inputs } from '../../../components/styled/buttonlogin-cadastro'
import { Link } from 'react-router-dom';
import Api from '../../../services/usuario';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
const api = new Api()

export default function App(props){

  const navigation = useHistory()

  const code = props.location.state.code
  const email = props.location.state.email


  const[ nSenha, setNsenha ] = useState('')
  const[ nrSenha, setNrsenha ] = useState('')

  function senhasIguais() {
      if(nSenha !== nrSenha){
        toast.error('As senhas não são iguais')
      } else {
        alterar()
      }
  }

  async function alterar() {
      let r = await api.novaSenha(code, email, nSenha)
      if(r.erro){
        toast.error(r.erro)
      } else{
        toast.success('Alterado com Sucesso')
        toast.warning('VOLTANDO PARA A TELA DE LOGIN')
        setTimeout(() => navigation.push('/login'), 3500);
      }
  }
  
  return(
    <Container> 
      <ToastContainer/>
      <MenuTop/>
      <div className="container2"> 
        <div className="pt1"> 
          <Link to="/login"><Buttons width="11em" valor="Voltar" /></Link>
        </div>
        <div className="pt2"> 
          <div className="title"> Recuperação de senha</div>
          <div className="box-code"> 
            <div className="title-box-code"> Digite a nova senha </div>
            <div className="box-code-inputs"> 
              <Inputs valor={e => setNsenha(e)}  place="Digite sua senha"/>
              <Inputs valor={e => setNrsenha(e)}  place="Digite novamente sua senha"/>
            </div>
              <Buttons clicado={senhasIguais} width="25em" valor="Enviar"/>
          </div>
        </div>
      </div>
    </Container>
  )
}