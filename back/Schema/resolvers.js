const data = require("../data");
const axios = require("axios");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log("a");

app.post("/reservation", (req, res) => {
  console.log("b");
  console.log(req.body);
});

const resolvers = {
  Query: {
    getSport() {
      return data;
    },
  },
  Mutation: {
    annuler(id) {
      for (let i = 0; i < data[0].current; i++)
        if (data[0].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          data[0].users.slice(i);
          data[0].current--;
        }
      return data;
    },
    reserver() {
      if (data[1].current < data[1].maxCurrent) {
        data[1].current++;
        data[1].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
  },
};
module.exports = resolvers;
