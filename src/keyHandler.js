import { eventTypes, keyBinds } from "./constants.js";

export default class KeyHandler {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;

    document.addEventListener("keydown", this.handleKey.bind(this));

    this.eventSystem.on();
  }

  handleKey(e) {
    const key = e.key.toUpperCase();
    if (key in keyBinds) {
      e.preventDefault();

      this.eventSystem.emit(eventTypes.KEY_PRESSED, false, key);
    }
  }
}
