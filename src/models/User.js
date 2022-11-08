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
  constructor(userName, password, role) {
    this._username = userName;
    this._password = password;
    this._role = role;
  }

  set username(userName) {
    this._username = userName;
  }

  set password(password) {
    this._password = password;
  }

  set role(role) {
    this._role=role;
  }

  get username() {
    return this._username;
  }

  get role() {
    return this._role;
  }
}