import express from "express";
const app = express();

import data from "./data/data.json";

// res.send -> A message to the code coaches from Team Lions!
app.get("/", (req, res) => {
  res.send("Hello code coaches!");
});

// Finding the whole Team Lions
app.get("/teamlions", (req, res) => {
  res.status(200).json(data);
  res.sendStatus(400);
});

// How and where to use one parameter || And using Status codes!!!
app.get("/teamlions/:person", (req, res) => {
  const person = req.params.person;
  const findPerson = data.find((lion) => lion.name === person);
  if (findPerson) {
    res.status(200).json(findPerson);
  } else {
    res.sendStatus(404);
  }
});

// Status Codes - how and where to use them!
app.get("/aprilfools", (req, res) => {
  res.sendStatus(418);
});

app.get("/youcantsitwithus", (req, res) => {
  res.sendStatus(403);
});

app.listen(3000, () => console.log("App listening on port 3000!"));
