export default class User {

  constructor(userName, password, role) {
    this._username = userName;
    this._password = password;
    if (role == "admin" || role == "professor" || role == "student") {
      this._role = role;
    } else {
      this._role = null;
    }
  }

  set username(userName) {
    this._username = userName;
  }

  set password(password) {
    this._password = password;
  }

  set role(role) {
    if (role == "admin" || role == "professor" || role == "student") {
      this._role = role;
    } else {
      this._role = null;
    }
  }

  get username() {
    return this._username;
  }

  get role() {
    return this._role;
  }
}