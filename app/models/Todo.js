import { generateId } from "../utils/GenerateId.js"


export class Todo{
    constructor(data){
        this.id = generateId
        this.completed = data.completed
        this.description = data.description
        this.creatorId = this.creatorId
    }



   get TodoTemplate(){
        return `
        <div><input type="checkbox">${this.description}<i class="mdi mdi-trash-can selectable"></i></div>
        `


    }


    




}