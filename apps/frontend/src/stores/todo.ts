import { makeAutoObservable } from 'mobx';

export class TodoStore {
  value = '';
  invalidValue = false;

  constructor() {
    makeAutoObservable(this);
  }

  clear() {
    this.value = '';
    this.invalidValue = false;
  }

  setValue(value: string) {
    this.value = value;
    this.invalidValue = false;
  }

  validate() {
    this.invalidValue = !this.value;

    return !this.invalidValue;
  }
}
