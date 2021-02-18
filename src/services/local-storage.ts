export default class LocalStorageAccessor<T> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getValue(): T | null {
    const stringValue = localStorage.getItem(this.key);

    if (stringValue === null) {
      return null;
    }

    return JSON.parse(stringValue);
  }

  setValue(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  removeValue(): void {
    localStorage.removeItem(this.key);
  }
}
