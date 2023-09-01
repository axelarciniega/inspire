import { sandboxInspireService } from "../services/SandboxInspireService.js";
import { Pop } from "../utils/Pop.js";



export class SandboxInspireController{
    constructor(){
    }




    async createTodo(){
        try {
            await sandboxInspireService.createTodo()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }






}