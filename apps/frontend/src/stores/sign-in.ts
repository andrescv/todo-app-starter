import { makeAutoObservable } from 'mobx';
import validator from 'validator';

export class SignInStore {
  email = '';
  invalidEmail = false;
  password = '';
  invalidPassword = false;

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email: string) {
    this.email = email;
    this.invalidEmail = false;
  }

  setPassword(password: string) {
    this.password = password;
    this.invalidPassword = false;
  }

  validate() {
    this.invalidEmail = !validator.isEmail(this.email);
    this.invalidPassword = !this.password;

    return !(this.invalidEmail || this.invalidPassword);
  }
}
