import { AppState } from "../AppState.js";
import { sandboxInspireService } from "../services/SandboxInspireService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

    function _drawTodo(){
        console.log('drawing todos')
        let todo = AppState.myTodoList
        let content = ''
        todo.forEach(t => content += t.TodoTemplate )
        // setHTML('todo', content)
    }


export class SandboxInspireController{
    constructor(){
        this.getTodo()
        this.saveTodo()
        _drawTodo()
    }


     async getTodo(){
        try {
            await sandboxInspireService.getTodo
            console.log(AppState.myTodoList)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

    async saveTodo(){
        try {
            await sandboxInspireService.saveTodo
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    








}