import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxInspireController } from "./controllers/SandboxInspireController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { InspireController } from "./controllers/inspireController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [InspireController, SandboxInspireController],
    view: /*html*/`
    <section class="row" id="todo">
      <Span class="text-light">remaining</Span>
      <p>
  <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTodoForm" aria-expanded="false" aria-controls="collapseTodoForm">
    TODOS
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseTodoForm">
    <div class="card card-body" style="width: 300px;">
      <section class="row">
        <form action="">

          <div><button type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" class="btn btn-dark text-light rounded ">Creating TODO</button></div>

         
  <div class="form-control collapse" id="collapseForm" >

    <input type="text"  placeholder="TODO">
    <button>Submit</button>
  </div>

</form>



         

      </section>
    </div>
  </div>
</div>
     </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */