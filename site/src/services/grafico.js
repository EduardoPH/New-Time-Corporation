import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://ntc-api.vercel.app/estatisticas'
})

export default class Api{

     async qtdBairro(){
        let r = await api.get('/')
        return r.data
    } 

    async qtdCidade(){
        let r = await api.get('/Cidades')
        return r.data
    }
 
    async qtdMes(){
        let r = await api.get('/qtdMes')
        return r.data
    } 




}