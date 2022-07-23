import { makeAutoObservable } from 'mobx';
import validator from 'validator';

export class SignUpStore {
  fullName = '';
  invalidFullName = false;
  email = '';
  invalidEmail = false;
  password = '';
  invalidPassword = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
    this.invalidFullName = false;
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
    this.invalidFullName = !this.fullName;
    this.invalidEmail = !validator.isEmail(this.email);
    this.invalidPassword = !validator.isStrongPassword(this.password, {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    });

    return !(this.invalidFullName || this.invalidEmail || this.invalidPassword);
  }
}
