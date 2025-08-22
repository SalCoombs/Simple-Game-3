import { eventTypes } from "./constants.js";

export default class Enemy {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.unsubscribeFns = [];
    this.life = 2;

    const unsub = this.eventSystem.on(
      eventTypes.PLAYER_ATTACK,
      this.loseLife.bind(this)
    );
    this.unsubscribeFns.push(unsub);
  }

  loseLife(damage) {
    this.life -= damage;
    console.log(`Enemy lost ${damage} life`);
    this.eventSystem.emit(eventTypes.ENEMY_TAKE_DAMAGE, false, this);
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
