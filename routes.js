const express = require("express");
const userModel = require("./models/User");
const questionModel = require("./models/Questions");
const responseModel = require("./models/Responses");
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/`));

app.get('/', (req, res) => {{
    res.sendFile(path.join(__dirname, "/survey.html"));
}});



app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.status(200).json(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_question", async (request, response) => {
    let quest = new questionModel(request.body)
   await quest.collection.insertMany(request.body)
    try {
      response.send(quest);
    } catch (error) {
      response.status(500).send(error);
    } 
});
app.get("/questions", async (request, response) => {
  const questions = await questionModel.find({});

  /*try {
    response.status(200).json(questions);
  } catch (error) {
    response.status(500).send(error);
  }*/

  response.sendFile(path.join(__dirname, "survey.html"));
});

app.post("/add_response", async (request, response) => {
  const answer = new responseModel(request.body);

  try {
    await answer.save();
    response.send(answer);
  } catch (error) {
    response.status(500).send(error);
  }
});

  module.exports = app;