import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { Todo } from "../models/Todo.js"
import { Inspire } from "../models/inspire.js"
import { Weather } from "../models/weather.js"




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
        AppState.weather = new Weather(res.data)
        console.log(AppState.weather)
    }

    async getQuote(){
        const res = await api.get('/api/quotes')
        AppState.quotes = new Quote(res.data)
        console.log(AppState.quotes)
    }



}





export const inspireServices = new InspireServices()