import { AppState } from "../AppState.js";
import { sandboxInspireService } from "../services/SandboxInspireService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"
import { Todo } from "../models/Todo.js";

 




    function _drawTodo(){
        console.log('drawing todos')
        let todo = AppState.myTodoList
        let content = ''
        todo.forEach(t => content += t.TodoTemplate )
        setHTML('todo-temp', content)


        let countContent = Todo.TodoCount()
        setHTML('remain', countContent)

    }


export class SandboxInspireController{
    constructor(){
        AppState.on('account', this.getTodo)
        
        AppState.on('account', _drawTodo)
       AppState.on('myTodoList' ,_drawTodo)
        
    }

    async createTodo(){
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await sandboxInspireService.createTodo(formData)

            // @ts-ignore
            form.reset()
            

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


     async getTodo(){
        try {
            await sandboxInspireService.getTodo()
            console.log(AppState.myTodoList)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

   


    async deleteTodo(todoId){
        try {
            console.log('Delete that bad boi')
            if(await Pop.confirm('Are you sure you want to remove?')){
                sandboxInspireService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    async completeTodo(todoId){
        try {
            await sandboxInspireService.completeTodo(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    drawFahren(){
        setHTML('temp', AppState.weather.fahren)
    }

    drawCels(){
        setHTML('temp',AppState.weather.Celsius)
    }








}