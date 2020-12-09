export default class LocalStorageAccessor {
  constructor(key) {
    this.key = key;
  }

  getValue() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  setValue(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  removeValue() {
    localStorage.removeItem(this.key);
  }
}
