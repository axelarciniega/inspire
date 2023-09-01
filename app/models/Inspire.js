


export class Inspire{
    constructor(data){
        this.imgUrl = data.imgUrl
        this.date = data.date
        this.author = data.author
        this.time = data.time
        this.date = data.date 
        this.weather = data.weather
        this.temp = data.temp

    }

        get ActiveTemplate(){
            return `
                <div class="col-8 text-light">
            <div>
              <h1>${this.date}</h1>
            </div>
            <div>quote</div>
          </div>
            `
        }


        get WeatherTemplate(){
            return `
        <div class="col-4" >
            <h3> Weather ${this.weather}</h3>
            <h5> temp${this.temp}</h5>
        </div>
            
            `
        }











}