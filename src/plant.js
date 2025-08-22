export default class Plant {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.life = 3;
    this.unsubscribeFns = [];
  }
}
