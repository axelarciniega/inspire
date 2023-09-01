import { AppState } from "../AppState.js"
import { Inspire } from "../models/inspire.js"




// @ts-ignore
const api = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/',
  timeout: 8000,
  withCredentials: true
})


class InspireServices{

    async getPicture(){
        const res = await api.get('/api/images')
        console.log(res.data)
        AppState.activePicture = new Inspire(res.data)
    }


    async getWeather(){
        const res = await api.get('/api/weather')
        console.log(res.data)
    }



}





export const inspireServices = new InspireServices()