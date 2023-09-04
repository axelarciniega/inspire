import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"
import { Pop } from "../utils/Pop.js"

 




export class Todo{
    constructor(data){
        this.id = data.id || generateId
        this.completed = data.completed
        this.description = data.description
        this.creatorId = this.creatorId
    }



   get TodoTemplate(){
        return `
        <div> <span>${this.checkbox}</span> ${this.description} <span></span>${this.deleteButton}</div>
        `


    }

    get deleteButton(){
       

       return `
       <i onclick="app.SandboxInspireController.deleteTodo('${this.id}')" class="mdi mdi-trash-can selectable"></i>
       `
    }

    get checkbox(){
        if(this.completed){
            return `<input type="checkbox" checked onchange="app.SandboxInspireController.completeTodo('${this.id}')">`
        }else{
            return `<input type="checkbox" onchange="app.SandboxInspireController.completeTodo('${this.id}')">`
        }
        
    }

    static TodoCount(){
      let completed = AppState.myTodoList.filter(t => t.completed == false)
      if(completed.length){
        return `
        <h3 class="text-light">Remaining:${completed.length}</h3>
        `
      }else{
        return``
      }
        
    }
    




}