import { eventTypes } from "./constants.js";

export default class Player {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.keyBinds = {
      J: this.attack.bind(this),
    };

    this.damage = 1;

    this.eventSystem.on(eventTypes.KEY_PRESSED, this.handleKeyPress.bind(this));
  }

  handleKeyPress(key) {
    if (!this.keyBinds[key]) {
      console.error(`handleKeyPress: There is no command for ${key}.`);
    }
    this.keyBinds[key]();
  }

  attack() {
    console.log(`You are attacking with ${this.damage} damage`);
    this.eventSystem.emit(eventTypes.PLAYER_ATTACK, true, this.damage);
  }
}
