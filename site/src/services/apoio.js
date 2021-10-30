import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/apoio'
})



export default class Api{

    async listarFrase() {
        let r = await api.get('/')
        return r.data
    }


}