import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawPokemonList() {
  let wildPokemon = AppState.wildPokemon
  let content = ''

  wildPokemon.forEach(pokemon => content += Pokemon.wildListTemplate(pokemon))
  setHTML('wildPokemon-list', content)
}


function _drawActivePokemon() {
  let activePokemon = AppState.activePokemon

  console.log('the following pokemon is active:', activePokemon)

  if (activePokemon) {
    setHTML('active-pokemon', activePokemon.activePokemonTemplate)
  }
}




export class WildPokemonController {
  constructor() {
    this.getWildPokemon()

    AppState.on('wildPokemon', _drawPokemonList)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  // TODO: first, we are going to create an async fxn that will get data from the pokeAPI. Remember, our WildPokemon are what we are getting from the pokemonAPI, and SandboxPokemon is our interaction with the BCW sandbox api.

  async getWildPokemon() {
    try {
      await wildPokemonService.getWildPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async setActivePokemon(name) {
    try {
      console.log(name)
      await wildPokemonService.setActivePokemon(name)
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }




}