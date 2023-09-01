


export class Quote{
    constructor(data){
        this.author = data.author
        this.quote = data.content
    }

    get QuoteTemplate(){
        return `
            <span class='text-light' title="${this.author}"><b>${this.quote}</b></span>
        `
    }



}