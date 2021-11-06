import { Link } from 'react-router-dom'
import {Container} from './styled'
import { useState } from 'react'
import MenuTop from '../../../components/commum/menu'
import { Buttons } from '../../../components/styled/buttonlogin-cadastro'
import { useHistory } from 'react-router'
import { toast , ToastContainer} from 'react-toastify'

import Api from '../../../services/usuario.js'
const api = new Api()


function codigo(navigation, email) {

  if(email === undefined){
    navigation.push('/login')
  }

} 

export default function App(props){
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [thre, setThre] = useState('')
  const [four, setFour] = useState('')
  
  const navegacao = useHistory()

  codigo(navegacao, props.location.state)

  const code = `${one}${two}${thre}${four}`
  const email =  props.location.state === undefined ? "" : props.location.state.email

  async function verificar() {

    let r = await api.code(code, email)
    
    if(r.erro){
      toast.error(r.erro)
    } else {
      navegacao.push(
        '/nova-senha',
        {email, code}
      )
    }
  }

  async function rec() {
    let r = await api.recuperacao(email)
    if(r.erro){
        toast.error(r.erro)
    } else {
      toast.warn('foi enviado outro E-mail')
    }
  }

  function move(text, position){
    let value = text.length
    if(value === 1)
      document.getElementById(position).focus();
  }

  return(
    <Container> 
      <ToastContainer/>
      <MenuTop/>
      <div className="container2"> 
        <div className="pt1"> 
          <Link to='/login'><Buttons width="11em" valor="Voltar" /></Link>
        </div>
        <div className="pt2"> 
          <div className="title"> Recuperação de senha</div>
          <div className="box-code"> 
            <div className="title-box-code"> Digite o código recebido </div>
            <div className="box-code-inputs"> 
              <input id="1" className="password" onChange={e => setOne(e.target.value)} onKeyUp={move(one, "2")} type="text" maxLength="1"/>
              <input id="2" className="password" onChange={e => setTwo(e.target.value)} onKeyUp={move(two, "3")}  type="text" maxLength="1"/>
              <input id="3" className="password" onChange={e => setThre(e.target.value)} onKeyUp={move(thre, "4")} type="text" maxLength="1"/>
              <input id="4" className="password" onChange={e => setFour(e.target.value)} type="text" maxLength="1"/> 
            </div>

            <div className="box-code-pt2"> 
              <div className="aviso"> Não recebeu? <span onClick={rec}> Reenviar </span></div>
               <Buttons clicado={verificar} width="13em" valor="Enviar" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}