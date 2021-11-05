import axios from 'axios'

const api = new axios.create({
    baseURL: 'https://api-ntc.herokuapp.com/denuncia'
})



export default class Api{

  async listarDenun(){
    let r = await api.get('/')
    return r.data
}

}