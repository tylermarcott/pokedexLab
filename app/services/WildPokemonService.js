import { AppState } from "../AppState.js"
import { baseURL } from '../env.js'
import { Pokemon } from "../models/Pokemon.js"


// @ts-ignore
const wildPokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/', //base URL to the pokemon API without any filters.
  timeout: 5000
})



class WildPokemonService {
  async setActivePokemon(name) {
    const res = await wildPokemonApi.get(`v2/pokemon/${name}`)

    console.log('we got a pokemon: ', res.data)

    AppState.activePokemon = new Pokemon(res.data)

    console.log('active pokemon is:', AppState.activePokemon)
  }

  // NOTE: had an issue with pulling the right get for the pokemon API. Full API result URL after filter was https://pokeapi.co/api/v2/pokemon?limit=151, so what I wanted to 'get' from wildPokemonApi was 'v2/pokemon?limit=151', which is not a part of the base URL but the path that we want to be able to get our pokemon data.
  async getWildPokemon() {
    const res = await wildPokemonApi.get('v2/pokemon?limit=151')
    console.log('caught some pokemon', res.data)
    AppState.wildPokemon = res.data.results
  }

}


export const wildPokemonService = new WildPokemonService()
