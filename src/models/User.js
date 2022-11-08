/*const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;*/

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
    this.role=role;
  }

  get username() {
    return this.username;
  }

  get role() {
    return this.role;
  }
}