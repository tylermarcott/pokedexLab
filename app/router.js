import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WildPokemonController } from "./controllers/WildPokemonController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: WildPokemonController,
    view: /*html*/`

  <div class="container-fluid">
    <div class="row">
      <h2>PokeMaynes</h2>
      <button>My Pokemon</button>
    </div>

    <div class="row">
      <div class="col-3">
        <section id="wildPokemon-list"></section>
      </div>

      <div class="col-7">
        <section id="active-pokemon"></section>
      </div>
    </div>
  </div>

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