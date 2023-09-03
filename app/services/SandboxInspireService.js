import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"

// @ts-ignore
const api = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/',
  timeout: 8000,
  withCredentials: true
})



class SandboxInspireService{
   

   async getTodo(){
        console.log('getting the todo')
        const res = await api.get('/api/todos')
        console.log(res.data)
        let myTodo = res.data.map(t => new Todo(t))
        AppState.myTodoList = myTodo
    }




    async saveTodo(){
        const todo = AppState.myTodoList 
        console.log('saving todos')
        const res = await api.post('api/todos', todo)
        console.log('saved todo', res.data)
        AppState.myTodoList.push(new Todo(res.data))
        AppState.emit('myTodoList')
    }

   


}




export const sandboxInspireService = new SandboxInspireService()