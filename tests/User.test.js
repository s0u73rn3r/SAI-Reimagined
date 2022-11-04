const mongoose = require("mongoose");
const URI = 'mongodb+srv://admin:CapstoneProjectTeamTBD@cluster0.sroumus.mongodb.net/Capstone-Db?retryWrites=true&w=majority'
const User = require("../models/User");
const { disable } = require("../routes");

const testUserData = {
  username: "username",
  password: "password",
  role: "student"
};

describe('Inserting a User', () => {
  jest.setTimeout(10000);
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect(URI);
    db = mongoose.connection;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Should Insert a User', async () => {
    const users = db.collection('users');
    
    await users.insertOne(testUserData);

    const insertedUser = await users.findOne({username: 'username'});
    expect(insertedUser.username).toEqual(testUserData.username);
    expect(insertedUser.password).toEqual(testUserData.password);
    expect(insertedUser.role).toEqual(testUserData.role);
  });
});