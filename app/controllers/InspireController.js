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
        console.log('drawing weather')
        let weather = AppState.weather
        let content = ''
        weather.content += weather.WeatherTemplate
        setHTML('weathering', content)
    }







export class InspireController{
    constructor(){
        console.log('Hello from the controller')
        this.getPicture()
        this.getWeather()
        AppState.on('activePicture', _drawPicture)
        AppState.on('weather', _drawWeather)
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


}