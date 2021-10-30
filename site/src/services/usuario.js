import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/usuario'
})

export default class Api{

    async login(email, senha){
        let r = api.post('/login', {email, senha})
        return r.data
    }

}