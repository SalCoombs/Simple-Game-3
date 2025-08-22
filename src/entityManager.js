class EntityManager {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.enemies = [];

    this.eventSystem.on(
      eventTypes.ENEMY_TAKE_DAMAGE,
      this.checkDeadEnimies.bind(this)
    );
  }
}
