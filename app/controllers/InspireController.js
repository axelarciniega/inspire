import { AppState } from "../AppState.js"
import { Inspire } from "../models/inspire.js";
import { inspireServices } from "../services/inspireServices.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js";

    function _drawPicture(){
        console.log('drawing that pic');
        let picture = AppState.activePicture
        document.body.style.backgroundImage = `url(${picture.imgUrl})`
        setHTML('active-picture' , picture.ActiveTemplate)
    }

    function _drawWeather(){
        console.log('drawing the weather')
        let weather = AppState.weather
        let content = ''
        content += weather.WeatherTemplate
        setHTML('weathering', content)
    }

    function _drawQuote(){
        console.log('drawing the quote')
        let quote = AppState.quotes
        let content = ''
        content += quote.QuoteTemplate
        setHTML('active-picture', content)
    }







export class InspireController{
    constructor(){
        console.log('Hello from the controller')
        this.getPicture()
        this.getWeather()
        this.getQuote()
        AppState.on('activePicture', _drawPicture)
        AppState.on('weather', _drawWeather)
        AppState.on('quotes', _drawQuote)
    }

    async getPicture(){
        try {
            await inspireServices.getPicture()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getWeather(){
        try {
            await inspireServices.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    async getQuote(){
        try {
            await inspireServices.getQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


}