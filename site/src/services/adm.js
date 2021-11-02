import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/administrador'
})

export default class Api{



    // VERBOSA DA AREA DE VALIDACAO
    async ListaValidacoes() {
        let r = await api.get('/denuncia')
        return r.data
    }
    async AtivarDenun(id, depoimento){
        let r = await api.put(`/denuncia/${id}`, {depoimento})
        return r.data
    }
    async deletarDen(id){
        let r = await api.delete(`/denuncia/${id}`)
        return r.data
    }


    // VERBOS DA AREA DE APOIO
    async ListaFrases(){
        let r = await api.get('/apoio')
        return r.data
    }
    async cadastrarFrase(frase){
        let r = await api.post('/apoio', {frase})
        return r.data
    }
    async alterarFrase(id, frase){
        let r = await api.put(`/apoio/${id}`, {frase})
        return r.data
    }
    async removerFrase(id){
        let r = await api.delete(`/apoio/${id}`)
        return r.data
    }



    // VERBOS DO CARGO
    async ListarAdms(){
        let r = await api.get('/cargos')
        return r.data
    }
    async cadastrarAdm(nome, senha){
        let r = await api.post('/cargos',{nome, senha})
        return r.data
    }
    async alterarAdm(id, nome, senha){
        let r = await api.put(`/cargos/${id}`,{nome, senha})
        return r.data
    }
    async deletarAdm(id){
        let r = await api.delete(`/cargos/${id}`)
        return r.data
    }
    // LOGIN ADM
    async LoginAdm(nome, senha){
        let r = await api.post('/login', {nome, senha})
        return r.data
    }


    //VERBO LISTAR AS USUARIAS
    async ListarUsu(){
        let r = await api.get('/usuarios')
        return r.data
    }
    async BuscarUsu(id){
        let r = await api.get(`/buscarUsuario/${id}`)
        return r.data
    }



    //VERBOS LISTAR TODAS AS DENUNCIAS
    async ListarDenuncias(){
        let r = await api.get('/listadenuncias')
        return r.data
    }
    async BuscarDenuncia(id){
        let r = await api.get(`/buscarDenuncia/${id}`)
        return r.data
    }

}