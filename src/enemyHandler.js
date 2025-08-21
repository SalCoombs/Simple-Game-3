import Enemy from "./enemy.js";
import { eventTypes } from "./constants.js";

export default class EnemyHandler {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.enemies = [];
    this.target = null;

    this.eventSystem.on(
      eventTypes.ENEMY_TAKE_DAMAGE,
      this.checkDeadEnimies.bind(this)
    );
  }

  #spawnEnemy() {
    const enemy = new Enemy(this.eventSystem);
    this.enemies.push(enemy);
    console.log("Spawned Enemy");
    console.log(this.enemies);

    setTimeout(this.#spawnEnemy.bind(this), 10000);
  }

  startSpawn() {
    setTimeout(this.#spawnEnemy.bind(this), 10000);
  }

  selectTarget(index) {
    this.target = index;
  }

  checkDeadEnimies() {
    const deadEnemies = this.enemies.filter((enemy) => enemy.life <= 0);

    if (deadEnemies.length > 0) console.log(`------Enemy Died------`);

    deadEnemies.forEach((enemy) => {
      for (const unsub of enemy.unsubscribeFns) {
        console.log(`Unsubscribing`);
        unsub();
      }
    });

    this.enemies = this.enemies.filter((enemy) => enemy.life > 0);
  }
}
