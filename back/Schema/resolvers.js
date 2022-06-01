const data = require("../data");

const resolvers = {
  Query: {
    getSport() {
      return data;
    },
  },
  Mutation: {
    annuler(userId) {
      sports.current--;
      sports.forEach((e) => {
        for (let i = 0; i < e.users.length; i++)
          if (e.users[i] === userId) e.users.slice(i, i);
      });
      return sports;
    },
    reserver(userId) {
      if (sports.users.length < sports.users.maxCurrent) {
        sports.currenet++;
        sports.users.push(userId);
      }
      return sports;
    },
  },
};
module.exports = resolvers;
