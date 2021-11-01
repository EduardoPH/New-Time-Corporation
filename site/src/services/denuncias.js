import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030/denuncia'
})



export default class Api{

  async listarDenun(){
    let r = await api.get('/')
    return r.data
}

}