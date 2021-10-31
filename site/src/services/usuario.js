import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/usuario'
})

export default class Api{

    async login(email, senha){
        let r = await api.post('/login', {email, senha})
        return r.data
    }

    async cadastro(nome, email, senha, telefone, cpf) {
        let r = await api.post('/cadastrar', {nome, email, senha, telefone, cpf})
        return r.data
    }

    async recuperacao (email){
        let r = await api.post('/recuperacao', {email})
        return r.data
    }

    async code(codigo, email){
        let r = await api.post('/validarCodigo',{codigo, email})
        return r.data 
    }

    async novaSenha(codigo, email, senha){
        let r = await api.put('/novaSenha', {codigo, email, senha})
        return r.data
    }


}