import { generateId } from "../utils/GenerateId.js"


export class Todo{
    constructor(data){
        this.id = generateId
        this.completed = data.completed
        this.description = data.description
        this.creatorId = this.creatorId
    }



    TodoTemplate(){
        return `
        <div><input type="checkbox"><i class="mdi mdi-trash-can selectable"></i></div>
        `


    }




}