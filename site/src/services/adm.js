import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/administrador'
})

export default class Api{
    async ListaValidacoes() {
        let r = await api.get('/denuncia')
        return r.data
    }



}