import { eventTypes } from "./constants.js";

export default class Player {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.commandMap = {
      J: this.#attack.bind(this),
      K: this.#dig.bind(this),
      I: this.#showInventory.bind(this),
      P: this.#plant.bind(this),
    };

    this.damage = 1;
    this.inventory = {
      energy: 4,
      seeds: 0,
    };

    this.eventSystem.on(
      eventTypes.KEY_PRESSED,
      this.#handleKeyPress.bind(this)
    );

    this.eventSystem.on(eventTypes.PLANT_GEN_ENERGY, (energy) => {
      this.inventory["energy"] += energy;
    });
  }

  isAlive() {
    return this.inventory["energy"] > 0;
  }

  #handleKeyPress(key) {
    if (!this.commandMap[key]) {
      console.error(`handleKeyPress: There is no command for ${key}.`);
    }
    this.commandMap[key]();
  }

  #attack() {
    if (this.inventory["energy"] <= 0) {
      console.log(`You are to tired!`);
      return;
    }

    this.inventory["energy"] -= 1;
    console.log(`You are attacking with ${this.damage} damage`);
    this.eventSystem.emit(eventTypes.PLAYER_ATTACK, true, this.damage);
  }

  #dig() {
    if (this.inventory["energy"] <= 0) {
      console.log(`You are to tired!`);
      return;
    }

    const numSeeds = Math.floor(Math.random() * 3) + 1; //Between 1 and 3
    this.inventory["seeds"] += numSeeds;
    this.inventory["energy"] -= 1;

    if (numSeeds === 1) {
      console.log(`You dug up ${numSeeds} seed`);
    } else {
      console.log(`You dug up ${numSeeds} seeds`);
    }
  }

  #showInventory() {
    console.log(`\nInventory:`);
    for (const item in this.inventory) {
      console.log(`${item}: ${this.inventory[item]}`);
    }
  }

  #plant() {
    if (!(this.inventory["seeds"] ?? 0) > 0) {
      console.log("You are out of seeds!");
      return;
    }

    if (this.inventory["energy"] <= 0) {
      console.log("You are to tired!");
      return;
    }

    this.inventory["seeds"] -= 1;
    this.inventory["energy"] -= 1;
    this.eventSystem.emit(eventTypes.SPAWN_PLANT, false);
  }
}
