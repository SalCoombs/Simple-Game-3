import { eventTypes } from "./constants.js";

export default class Player {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.commandMap = {
      J: this.attack.bind(this),
      K: this.dig.bind(this),
      I: this.showInventory.bind(this),
    };

    this.damage = 1;
    this.inventory = {};

    this.eventSystem.on(eventTypes.KEY_PRESSED, this.handleKeyPress.bind(this));
  }

  handleKeyPress(key) {
    if (!this.commandMap[key]) {
      console.error(`handleKeyPress: There is no command for ${key}.`);
    }
    this.commandMap[key]();
  }

  attack() {
    console.log(`You are attacking with ${this.damage} damage`);
    this.eventSystem.emit(eventTypes.PLAYER_ATTACK, true, this.damage);
  }

  dig() {
    const numSeeds = Math.floor(Math.random() * 3) + 1; //Between 1 and 3
    this.inventory["seeds"] = (this.inventory["seeds"] ?? 0) + numSeeds;
    if (numSeeds === 1) {
      console.log(`You dug up ${numSeeds} seed`);
    } else {
      console.log(`You dug up ${numSeeds} seeds`);
    }
  }

  showInventory() {
    console.log(`\nInventory:`);
    for (const item in this.inventory) {
      console.log(`${item}: ${this.inventory[item]}`);
    }
  }
}
