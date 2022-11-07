export default class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  set username(username) {
    this.username = username;
  }

  set password(password) {
    this.password = password;
  }

  set role(role) {

  }

  get username() {
    return this.username;
  }

  get role() {
    return this.role;
  }
}