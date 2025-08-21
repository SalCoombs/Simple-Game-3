import EnemyHandler from "./enemyHandler.js";
import EventSystem from "./eventSystem.js";
import KeyHandler from "./keyHandler.js";
import Player from "./player.js";
import World from "./world.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const enemyHandler = new EnemyHandler(eventSystem);
  const world = new World(eventSystem);
  const keyHandler = new KeyHandler(eventSystem);
  const player = new Player(eventSystem);

  enemyHandler.startSpawn();

  function runGame(timeStamp) {
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);
}
