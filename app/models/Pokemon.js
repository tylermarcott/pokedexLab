

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.type = data.type || data.types.join(',')
    this.creatorId = data.creatorId
  }
}