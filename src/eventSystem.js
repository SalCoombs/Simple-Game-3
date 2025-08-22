export default class EventSystem {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    this.listeners[event] ??= [];
    this.listeners[event].push(callback);

    return () => {
      const index = this.listeners[event].indexOf(callback);
      if (index !== -1) this.listeners[event].splice(index, 1);
    };
  }

  emit(event, onceFlag, ...args) {
    if (!this.listeners || this.listeners.length === 0) return;
    // console.log(this.listeners[event]);

    if (onceFlag) {
      if (!this.listeners[event] || this.listeners[event].length === 0) {
        return;
      }
      this.listeners[event][0](...args);
    } else {
      for (const callback of this.listeners[event] ?? []) {
        callback(...args);
      }
    }
  }
}
