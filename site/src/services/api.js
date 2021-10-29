import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api{
    async login(email, senha){
        let r = await api.post('/login', {email , senha});
        return r.data;

    }
    async cadastrarUsu(nome, email, senha, telefone, cpf){
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



    async ListarUsu(){
        let r = await api.get('/usuario')
        return r.data
    }

    async buscarUsu(usuaria){
        let r = await api.post('/buscarUsuario', {busca: usuaria})
        return r.data
    }
    async denUsu(id){
        let r = await api.get(`/buscarden/${id}`)
        return r.data
    }
    
    async deletarUsu(id){
        let r = await api.delete(`/usuario/${id}`)
        return r.data
    }



    async listarDenun(){
        let r = await api.get('/denuncia')
        return r.data
    }
    async BuscarDen(busca){
        let r = await api.post('/Buscardenuncia',{ busca})
        return r.data
    }
    async validarDenuncia(){
        let r = await api.get('/validarDenuncia')
        return r.data
    }
    async deletarDen(id){
        let r = await api.delete(`/denuncia/ ${id}`)
        return r.data;
    }
    async AtivarDenun(id, descricao){
        let r = await api.put(`/cadastrarDenuncia/${id}`, descricao)
        return r.data;
    }

    async validarDenunciaF(){
        let r = await api.get("/validarDenunciaFalse")
        return r.data
    }


    async qtdBairro(){
        let r = await api.get('/localBairro')
        return r.data
    }
    async qtdCidade(){
        let r = await api.get('/localCidade')
        return r.data
    }
    async qtdMes(){
        let r = await api.get('/qtdMes')
        return r.data
    }


}
