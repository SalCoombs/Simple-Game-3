import { eventTypes } from "./constants.js";
import Entity from "./entity.js";

export default class Plant extends Entity {
  constructor(eventSystem) {
    super(eventSystem, 3);

    const unsub = this.eventSystem.on(
      eventTypes.PLAYER_ATTACK,
      this.loseLife.bind(this)
    );
    this.unsubscribeFns.push(unsub);
  }
}
