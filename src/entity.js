import { eventTypes } from "./constants.js";

export default class Entity {
  constructor(eventSystem, life) {
    this.eventSystem = eventSystem;
    this.life = life;

    this.unsubscribeFns = [];
  }

  loseLife(damage) {
    this.life -= damage;
  }

  checkDead() {
    return this.life <= 0;
  }

  unsubscribeAllListeners() {
    for (const unsub of this.unsubscribeFns) {
      unsub();
    }
  }
}
