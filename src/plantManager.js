import { eventTypes } from "./constants.js";
import EntityManager from "./entityManager.js";
import Plant from "./plant.js";

export default class PlantManager extends EntityManager {
  constructor(eventSystem) {
    super(eventSystem);

    this.eventSystem.on(
      eventTypes.PLANT_TAKE_DAMAGE,
      this.checkDeadEntities.bind(this, "Plant")
    );

    this.eventSystem.on(eventTypes.SPAWN_PLANT, this.#spawnPlant.bind(this));
  }

  #spawnPlant() {
    const plant = new Plant(this.eventSystem);
    this.entities.push(plant);
    console.log(`You planted a plant!`);
  }
}
