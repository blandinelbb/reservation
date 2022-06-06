const data = require("../data");

const resolvers = {
  Query: {
    getSport() {
      return data;
    },
  },
  Mutation: {
    annulerTennis() {
      for (let i = 0; i < data[0].current; i++) {
        if (data[0].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          var a = data[0].users.slice(0, i);
          data[0].current--;
          data[0].users = a;
        }
      }
      return data;
    },
    reserverTennis() {
      var userId = false;
      for (let i = 0; i < data[0].users.length; i++) {
        if (data[0].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          userId = true;
          alert("Vous avez déjà réservé cette activité sportif");
        }
      }
      if (data[0].current < data[0].maxCurrent && !userId) {
        data[0].current++;
        data[0].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
    annulerJudo() {
      for (let i = 0; i < data[1].current; i++) {
        if (data[1].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          var a = data[1].users.slice(0, i);
          data[1].current--;
          data[1].users = a;
        }
      }
      return data;
    },
    reserverJudo() {
      var userId = false;
      for (let i = 0; i < data[1].users.length; i++) {
        if (data[1].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          userId = true;
          alert("Vous avez déjà réservé cette activité sportif");
        }
      }
      if (data[1].current < data[1].maxCurrent && !userId) {
        data[1].current++;
        data[1].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
    annulerCombat() {
      for (let i = 0; i < data[2].current; i++) {
        if (data[2].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          var a = data[2].users.slice(0, i);
          data[2].current--;
          data[2].users = a;
        }
      }
      return data;
    },
    reserverCombat() {
      var userId = false;
      for (let i = 0; i < data[2].users.length; i++) {
        if (data[2].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          userId = true;
          alert("Vous avez déjà réservé cette activité sportif");
        }
      }
      if (data[2].current < data[2].maxCurrent && !userId) {
        data[2].current++;
        data[2].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
    annulerZumba() {
      for (let i = 0; i < data[3].current; i++) {
        if (data[3].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          var a = data[3].users.slice(0, i);
          data[3].current--;
          data[3].users = a;
        }
      }
      return data;
    },
    reserverZumba() {
      var userId = false;
      for (let i = 0; i < data[3].users.length; i++) {
        if (data[3].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          userId = true;
          alert("Vous avez déjà réservé cette activité sportif");
        }
      }
      if (data[3].current < data[3].maxCurrent && !userId) {
        data[3].current++;
        data[3].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
    annulerBoxe() {
      for (let i = 0; i < data[4].current; i++) {
        if (data[4].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          var a = data[4].users.slice(0, i);
          data[4].current--;
          data[4].users = a;
        }
      }
      return data;
    },
    reserverBoxe() {
      var userId = false;
      for (let i = 0; i < data[4].users.length; i++) {
        if (data[4].users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868") {
          userId = true;
          alert("Vous avez déjà réservé cette activité sportif");
        }
      }
      if (data[4].current < data[4].maxCurrent && !userId) {
        data[4].current++;
        data[4].users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return data;
    },
  },
};
module.exports = resolvers;
