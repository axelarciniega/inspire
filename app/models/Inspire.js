


export class Inspire{
    constructor(data){
        this.imgUrl = data.imgUrl
        this.date = data.date
        this.author = data.author
        this.time = data.time
        this.date = data.date 
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
            
        }











}