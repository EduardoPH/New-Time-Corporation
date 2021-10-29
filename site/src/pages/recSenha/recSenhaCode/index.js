import {Container} from './styled'
import MenuTop from '../../../components/commum/menu'
import { useState } from 'react'
import { Buttons } from '../../../components/styled/buttonlogin-cadastro'

export default function App(){
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [thre, setThre] = useState('')
  // eslint-disable-next-line
  const [four, setFour] = useState('')

  function move(text, position){
    let value = text.length
    if(value === 1)
      document.getElementById(position).focus();
  }

  return(
    <Container> 
      <MenuTop/>
      <div className="container2"> 
        <div className="pt1"> 
          <Buttons width="11em" valor="Voltar" />
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
              <div className="aviso"> Não recebeu? <span> Reenviar </span> </div>
              <Buttons width="13em" valor="Enviar" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}