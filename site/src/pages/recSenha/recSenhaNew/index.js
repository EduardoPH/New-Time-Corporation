import {Container} from './styled'
import MenuTop from '../../../components/menu'
import { useEffect, useState } from 'react'
import { Buttons, Inputs } from '../../../components/login-cadastro'

export default function App(){

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
            <div className="title-box-code"> Digite a nova senha </div>
            <div className="box-code-inputs"> 
              <Inputs place="Digite sua senha"/>
              <Inputs place="Digite novamente sua senha"/>
            </div>
              <Buttons width="18em" valor="Enviar"/>
          </div>
        </div>
      </div>
    </Container>
  )
}