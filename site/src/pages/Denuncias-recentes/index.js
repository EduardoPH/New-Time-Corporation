import { Container } from "./styled";
import Menu from '../../components/menu'
import Mensagem from '../../components/recents-mensagem'
import { useEffect, useState } from "react";
import Api from '../../services/api'
const api = new Api()

export default function Details() {

    const [denuncia, setDenuncia] = useState([])

    async function ListDen(){
        const apiResponse = await api.listarDenun()
        console.log(apiResponse)
        setDenuncia(apiResponse)
    }

    useEffect(
        () => ListDen(), [] 
    );

    return(
        <Container>
            <Menu/>
            <div className="rc-titulo"> Denúncias Recentes </div>
            <div className="rc-conteudo">
                <div className="rc-denuncias">
                {denuncia.map(i => 
                    <Mensagem denuncia={i} />
                )}
                </div>
            </div>
        </Container>
    )
}
