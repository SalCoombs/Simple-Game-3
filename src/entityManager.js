export default class EntityManager {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;

    this.entities = [];
  }

  checkDeadEntities(name) {
    const deadEntities = this.entities.filter((entity) => entity.checkDead());

    if (deadEntities.length > 0) console.log(`-----${name} Died------`);

    deadEntities.forEach((entity) => {
      entity.unsubscribeAllListeners();
    });

    this.entities = this.entities.filter((entity) => !entity.checkDead());
  }
}
