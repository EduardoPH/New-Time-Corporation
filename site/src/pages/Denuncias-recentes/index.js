import { Container } from "./styled";
import Menu from '../../components/menu'
import Mensagem from '../../components/recents-mensagem'
import { useState, useEffect } from "react";

export default function Details() {

    const [denuncia, setDenuncia] = useState([])

    function ApiResponse(){
        let r = [
            {
                name: "Dudu",
                msg: "opaaa testando"
            }, 
            {
                name: "Erik",
                msg: "opaaa testando"
            }, 
            {
                name: "Jhow",
                msg: "opaaa testando"
            },
        ]

        setDenuncia(r)
    };
    useEffect(
        () => {ApiResponse() }, [] 
    );
    return(
        <Container>
            <Menu/>
            <div className="rc-titulo"> Denúncias Recentes </div>
            <div className="rc-conteudo">
                <div className="rc-denuncias"> 
                    {denuncia.map(item => 
                        <Mensagem  denuncia={item} />
                    )}
                </div>
            </div>
        </Container>
    )
}