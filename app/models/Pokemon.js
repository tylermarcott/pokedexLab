import { AppState } from "../AppState.js"


export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.type = data.type || data.types.join(',')
    this.creatorId = data.creatorId
    this.img = data.sprites.front_default
  }


  static wildListTemplate(pokemon) {
    return `
      <p class="selectable text-dark py-1 rounded mb-0" onclick="app.WildPokemonController.setActivePokemon('${pokemon.name}')" >${pokemon.name}</p>
    
    `
  }

  get activePokemonTemplate() {
    return `
    
      <div class="row">
        <div class="col-6">
          <div class="row">
            ${this.name}
          </div>
          <div class="row">
            <img src="${this.img}" alt="bad-img">
          </div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                Height: ${this.height}"
              </div>
              <div class="row">
                Type: ${this.type}
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                Weight: ${this.weight}kg
              </div>
              <div class="row">
                catch button
              </div>
            </div>

          </div>
        </div>
        <div class="col-3">
          List of pokemon in here.
        </div>
      </div>

    
    `
  }







}