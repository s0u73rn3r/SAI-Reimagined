export default class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  set setUsername(username) {
    this.username = username;
  }

  set setPassword(password) {
    this.password = password;
  }

  set setRole(role) {

  }

  get getUsername() {
    return this.username;
  }

  get getRole() {
    return this.role;
  }
}