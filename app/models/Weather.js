import { AppState } from "../AppState.js"



export class Weather{
    constructor(data){
        this.name = data.name
        this.temp = data.main.temp 
        this.weather = data.weather[0].description
    }

    get WeatherTemplate(){
            return `
        <div class="col-2 border" >
            <h3  id="temp">${this.degree}</h3>
            <h5>${this.weather}</h5>
            <h5>${this.name}</h5>
        </div>
            
            `
        }
        
        get Celsius(){
            let Celsius = this.temp - 273
            return Celsius
        }

        get Fahren(){
            let Celsius = this.temp - 273
            let fahren = Celsius * 1.8 + 32
            return fahren
        }


        get degree(){
          if(AppState.isVisible == true){
            return `
            <div class="selectable" onclick="app.InspireController.toggleDisplay()">${this.Celsius.toFixed(0)} C🌡️</div>
            `

          }if(AppState.isVisible == false){
             return `
            <div class="selectable" onclick="app.InspireController.toggleDisplay()">${this.Fahren.toFixed(0)} F🌡️</div>
            `
          }
        
        }
        
       


            

    }