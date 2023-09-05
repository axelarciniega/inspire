


export class Quote{
    constructor(data){
        this.author = data.author
        this.quote = data.content
    }

    get QuoteTemplate(){
        return `
        <section class='row justify-content-end'>
        <div class="col-8">
        <span class='text-light'><b>"${this.quote}"</b></span>
        <span class="on-hover">${this.author}</span>
        </section>
        </div>
        
            
        `
    }



}