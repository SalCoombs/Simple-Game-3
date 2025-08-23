import { eventTypes } from "./constants.js";
import Entity from "./entity.js";
import { getRandomNumBetween } from "./util.js";

export default class Plant extends Entity {
  constructor(eventSystem) {
    super(eventSystem, 3);

    let unsub = this.eventSystem.on(
      eventTypes.ENEMY_ATTACK,
      this.loseLife.bind(this)
    );
    this.unsubscribeFns.push(unsub);

    unsub = this.eventSystem.on(
      eventTypes.HARVEST_PLANT,
      this.genEnergy.bind(this)
    );
    this.unsubscribeFns.push(unsub);
  }

  loseLife(damage) {
    this.life -= damage;
    console.log(`Plant lost ${damage} life`);
    this.eventSystem.emit(eventTypes.PLANT_TAKE_DAMAGE, false, this);
  }

  genEnergy() {
    const randomEnergy = getRandomNumBetween(1, 3);
    console.log(`Plant generated ${randomEnergy} energy`);

    this.eventSystem.emit(eventTypes.PLANT_GEN_ENERGY, false, randomEnergy);
  }
}
