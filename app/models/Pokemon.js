import { AppState } from "../AppState.js"


export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.type = data.type || data.types.join(',')
    this.creatorId = data.creatorId
  }


  static wildListTemplate(pokemon) {
    return `
      <p class="selectable text-dark py-1 rounded mb-0" onclick="app.WildPokemonController.setActivePokemon('${pokemon.name}')" >${pokemon.name}</p>
    
    `
  }

  get activePokemonTemplate() {
    return `
    
    
    
    `
  }







}