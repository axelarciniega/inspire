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




   


    async deleteTodo(todoId){
      const res = await api.delete(`api/todos/${todoId}`)
      console.log('deleting')

      const filteredArr = AppState.myTodoList.filter(t => t.id != todoId)
      AppState.myTodoList = filteredArr

    }

    async completeTodo(todoId){
      const todo = AppState.myTodoList.find(todo => todo.id == todoId )
      todo.completed = !todo.completed

      const res = await api.put(`api/todos/${todoId}`, todo)
      console.log('completed', res.data);
      AppState.emit('myTodoList')
    }

    
   


}




export const sandboxInspireService = new SandboxInspireService()