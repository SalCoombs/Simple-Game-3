import Entity from "./entity.js";

export default class Plant extends Entity {
  constructor(eventSystem) {
    super(eventSystem, 3);
  }
}
