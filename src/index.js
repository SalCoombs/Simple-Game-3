import EnemyManager from "./enemyManager.js";
import EventSystem from "./eventSystem.js";
import KeyHandler from "./keyHandler.js";
import Player from "./player.js";
import FlowerManager from "./flowerManager.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const enemyManager = new EnemyManager(eventSystem);
  const flowerManager = new FlowerManager(eventSystem);
  const keyHandler = new KeyHandler(eventSystem);
  const player = new Player(eventSystem);

  function runGame(timeStamp) {
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);
}
