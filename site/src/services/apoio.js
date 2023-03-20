import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://ntc-api.vercel.app/apoio'
})



export default class Api{

    async listarFrase() {
        let r = await api.get('/')
        return r.data
    }


}