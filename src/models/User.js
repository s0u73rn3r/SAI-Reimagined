export default class User {
  constructor(username, password, role) {
    this._username = username;
    this._password = password;
    this._role = role;
  }

  set _username(username) {
    this._username = username;
  }

  set _password(password) {
    this._password = password;
  }

  set _role(role) {
    this._role = role;
  }

  get _username() {
    return this._username;
  }

  get getRole() {
    return this._role;
  }
}