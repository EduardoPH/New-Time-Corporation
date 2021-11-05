import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://api-ntc.herokuapp.com/formulario'
})

export default class Api{

    async cadastrarDenuncia( infos ) {
        let dados = JSON.parse(infos)                  
        const r = await api.post('/', dados)
        return r.data
    }

    async updateDenuncia( infos ) {
        let dados = JSON.parse(infos)                  
        const r = await api.put('/', dados)
        return r.data
    }
}