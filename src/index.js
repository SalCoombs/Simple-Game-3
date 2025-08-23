import Game from "./game.js";
import EventSystem from "./eventSystem.js";

window.onload = () => {
  const eventSystem = new EventSystem();
  const game = new Game(eventSystem);
};
