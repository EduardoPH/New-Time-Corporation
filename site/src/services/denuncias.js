import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://ntc-api.vercel.app/denuncia'
})



export default class Api{

  async listarDenun(){
    let r = await api.get('/')
    return r.data
}

}