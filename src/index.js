import EnemyManager from "./enemyManager.js";
import EventSystem from "./eventSystem.js";
import KeyHandler from "./keyHandler.js";
import Player from "./player.js";
import PlantManager from "./plantManager.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const enemyManager = new EnemyManager(eventSystem);
  const flowerManager = new PlantManager(eventSystem);
  const keyHandler = new KeyHandler(eventSystem);
  const player = new Player(eventSystem);

  function runGame(timeStamp) {
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);
}
