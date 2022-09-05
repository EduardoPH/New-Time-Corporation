import { Container } from "./styled";
import Menu from '../../components/commum/menu'
import {MensagemLeft} from '../../components/commum/recentes-mensagem'
import { useEffect, useState } from "react";
import Api from '../../services/denuncias.js'
import { Loading } from "react-loading-ui";
const api = new Api()

export default function Details() {

    const [denuncia, setDenuncia] = useState([])

    async function ListDen(){
        Loading({
            text: "Por Favor Aguarde",
            title: "CARREGANDO",
            theme: "dark",
            topBar: true,
            topBarColor: 'red'
          });
        const apiResponse = await api.listarDenun()
        console.log(apiResponse)
        setDenuncia(apiResponse)
        Loading()
    }

    useEffect(() => {
        ListDen();
      }, [])

    return(
        <Container>
            <Menu/>
            <div className="rc-titulo"> Denúncias Recentes </div>
            <div className="rc-conteudo">
                <div className="rc-denuncias" >
                {denuncia.map(i => 
                   <MensagemLeft visible={i.ativo === 0? 'none': ''} denuncia={i}/>
                )}
                </div>
            </div>
        </Container>
    )
}
