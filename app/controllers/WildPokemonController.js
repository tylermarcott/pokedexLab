import { AppState } from "../AppState.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"



export class WildPokemonController {
  constructor() {
    this.getWildPokemon()
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





}