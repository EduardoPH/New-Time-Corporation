import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://api-ntc.herokuapp.com/apoio'
})



export default class Api{

    async listarFrase() {
        let r = await api.get('/')
        return r.data
    }


}