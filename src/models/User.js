export default class User {
  constructor(username, password, role) {
    this._username = username;
    this._password = password;
    this._role = role;
  }

  set username(username) {
    this._username = username;
  }

  set password(password) {
    this._password = password;
  }

  set role(role) {
    this._role = role;
  }

  get username() {
    return this._username;
  }

  get getRole() {
    return this._role;
  }
}