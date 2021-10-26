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

    async frases(){
        let r = await api.get('/apoio')
        return r.data;
    }

    async cadastrarFrase(frase){
        let r = await api.post('/apoio', {frase})
        return r.data
    }

    async removerFrase(id){
        let r = await api.delete(`/apoio/${id}`)
        return r.data
    }

    async alterarFrase(id, frase){
        let r = await api.put(`/apoio/${id}`, {frase})
        return r.data
    }

    async listarAdms(){
        let r = await api.get('/administrador')
        return r.data
    }

    async cadastrarAdm(nome, senha){
        let r = await api.post('/administrador', {nome, senha})
        return r.data
    }
    async alterarAdm(id, nome, senha){
        let r = await api.put(`/administrador/${id}`, {nome, senha})
        return r.data   
    }
    async deletarAdm(id){
        let r = await api.delete(`/administrador/${id}`)
        return r.data
    }


}
