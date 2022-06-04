const data = require("../data");

const resolvers = {
  Query: {
    getSport() {
      return data;
    },
  },
  Mutation: {
    annuler(sport) {
      sport.current--;
      for (let i = 0; i < sport.users.length; i++)
        if (sport.users[i] === "b558ff34-b933-465b-a2a2-575eda3cf868")
          sport.users.slice(i, i);
      return sport;
    },
    reserver(sport) {
      if (sport.users.length < sport.users.maxCurrent) {
        sport.current++;
        sport.users.push("b558ff34-b933-465b-a2a2-575eda3cf868");
      }
      return sport;
    },
  },
};
module.exports = resolvers;
