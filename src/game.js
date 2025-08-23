import EnemyManager from "./enemyManager.js";
import KeyHandler from "./keyHandler.js";
import Player from "./player.js";
import PlantManager from "./plantManager.js";

export default class Game {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;

    this.isRunning = true;

    this.enemyManager = new EnemyManager(this.eventSystem);
    this.flowerManager = new PlantManager(this.eventSystem);
    this.keyHandler = new KeyHandler(this.eventSystem);
    this.player = new Player(this.eventSystem);
  }
}
