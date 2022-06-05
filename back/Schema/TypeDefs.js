const { gql } = require("apollo-server-express");

const typeDefs = gql`
  schema {
    query: Query
  }
  type sports {
    id: Int
    sport: String
    slot: [String]
    maxCurrent: Int
    current: Int
    users: [String]
  }
  type Query {
    getSport: [sports]
  }

  type Mutation {
    annuler: [sports]
    reserver: [sports]
  }
`;

module.exports = typeDefs;
