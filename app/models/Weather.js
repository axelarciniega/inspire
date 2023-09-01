


export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.weather = data.weather[0].description
    }

    get WeatherTemplate(){
            return `
        <div class="col-4 border" >
            <h3>${this.temp}</h3>
            <h5>${this.weather}</h5>
        </div>
            
            `
        }
}