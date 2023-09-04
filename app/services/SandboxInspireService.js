import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js";




class SandboxInspireService{
   
  

  async createTodo(formData){
    console.log('creating')
    const res = await api.post('/api/todos',formData)
    console.log(res.data)
    let newTodo = new Todo(res.data)
    AppState.myTodoList.push(newTodo)
    AppState.emit('myTodoList')
  }


   async getTodo(){
        console.log('getting the todo')
        const res = await api.get('api/todos', AppState.myTodoList)
        console.log(res.data)
        let myTodo = res.data.map(t => new Todo(t))
        AppState.myTodoList = myTodo
    }




    async saveTodo(data){
        const todo = AppState.myTodoList 
        console.log('saving todos')
        const res = await api.post('api/todos', todo)
        console.log('saved todo', res.data)
        AppState.myTodoList.push(new Todo(res.data))
        AppState.emit('myTodoList')
        console.log(data)
    }

   


}




export const sandboxInspireService = new SandboxInspireService()