import Enemy from "./enemy.js";
import { eventTypes } from "./constants.js";
import { getRandomTimeBetween } from "./util.js";

export default class EnemyManager {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.enemies = [];

    this.eventSystem.on(
      eventTypes.ENEMY_TAKE_DAMAGE,
      this.checkDeadEnimies.bind(this)
    );

    this.#startSpawn();
  }

  #spawnEnemy() {
    const enemy = new Enemy(this.eventSystem);
    this.enemies.push(enemy);
    console.log("------Spawned Enemy------");
    // console.log(this.enemies);

    const randomTime = getRandomTimeBetween(5, 15);

    setTimeout(this.#spawnEnemy.bind(this), randomTime);
  }

  #startSpawn() {
    const randomTime = getRandomTimeBetween(5, 15);
    setTimeout(this.#spawnEnemy.bind(this), randomTime);
  }

  checkDeadEnimies() {
    const deadEnemies = this.enemies.filter((enemy) => enemy.checkDead());

    if (deadEnemies.length > 0) console.log(`------Enemy Died------`);

    deadEnemies.forEach((enemy) => {
      enemy.unsubscribeAllListeners();
    });

    this.enemies = this.enemies.filter((enemy) => !enemy.checkDead());
  }
}
