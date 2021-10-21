import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api{
    async login(email, senha){
        let r = await api.post('/login', {email , senha});
        return r.data;
    }


    async cadastrar(nome, email, senha, telefone, cpf){
        let r = await api.post('/cadastrar', {nome, email, senha, telefone, cpf});
        return r.data;
    }
}

