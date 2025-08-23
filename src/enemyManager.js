import Enemy from "./enemy.js";
import { eventTypes } from "./constants.js";
import { getRandomTimeBetween } from "./util.js";
import EntityManager from "./entityManager.js";

export default class EnemyManager extends EntityManager {
  constructor(eventSystem) {
    super(eventSystem);

    this.eventSystem.on(
      eventTypes.ENEMY_TAKE_DAMAGE,
      this.checkDeadEntities.bind(this, "Enemy")
    );

    this.#startSpawn();
  }

  #spawnEnemy() {
    const enemy = new Enemy(this.eventSystem);
    this.entities.push(enemy);
    console.log("------Spawned Enemy------");
    // console.log(this.enemies);

    const randomTime = getRandomTimeBetween(5, 15);

    setTimeout(this.#spawnEnemy.bind(this), randomTime);
  }

  #startSpawn() {
    const randomTime = getRandomTimeBetween(5, 15);
    setTimeout(this.#spawnEnemy.bind(this), randomTime);
  }
}
