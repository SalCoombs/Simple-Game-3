import { eventTypes } from "./constants.js";
import Entity from "./entity.js";
import { getRandomTimeBetween } from "./util.js";

export default class Enemy extends Entity {
  constructor(eventSystem) {
    super(eventSystem, 2);

    this.damage = 1;

    const unsub = this.eventSystem.on(
      eventTypes.PLAYER_ATTACK,
      this.loseLife.bind(this)
    );
    this.unsubscribeFns.push(unsub);

    this.#startAttacking();
  }

  loseLife(damage) {
    this.life -= damage;
    console.log(`Enemy lost ${damage} life`);
    this.eventSystem.emit(eventTypes.ENEMY_TAKE_DAMAGE, false, this);
  }

  #startAttacking() {
    const randomTime = getRandomTimeBetween(3, 10);
    setTimeout(this.#attack.bind(this), randomTime);
  }

  #attack() {
    this.eventSystem.emit(eventTypes.ENEMY_ATTACK, true, this.damage);
  }
}
