import { Container } from "./styled";
import Menu from '../../components/commum/menu'
import Mensagem from '../../components/commum/recentes-mensagem'
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

      console.log(denuncia)

    return(
        <Container>
            <Menu/>
            <div className="rc-titulo"> Denúncias Recentes </div>
            <div className="rc-conteudo">
                <div className="rc-denuncias">
                {denuncia.map(i =>
                    <Mensagem visible={i.ativo === 1? 'none': ''} denuncia={i}/>
                )}
                </div>
            </div>
        </Container>
    )
}
