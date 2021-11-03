import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/formulario'
})

export default class Api{



    async ListarUsu( nomeUsu ){
        let r = await api.post('/buscarUsu', {nomeUsu})
        return r.data
    }

    async cadastrarDenuncia( tipoVestimenta, inferior, superior, calcado, complementoV,
                             pele, cabelo, corCabelo, complementoC,
                             latitude, longitude, bairro, cidade,  idusu, depoimento ) {
                                 
        const r = await api.post('/form', 
        { tipoVestimenta, inferior, superior, calcado, complementoV,
          pele, cabelo, corCabelo, complementoC,
          latitude, longitude, bairro, cidade,
          idusu, depoimento })
        return r.data
    }
}