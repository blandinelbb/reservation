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
    annuler(
      id: Int
      sport: String
      slot: [String]
      maxCurrent: Int
      current: Int
      users: [String]
    ): sports
    reserver(
      id: Int
      sport: String
      slot: [String]
      maxCurrent: Int
      current: Int
      users: [String]
    ): sports
  }
`;

module.exports = typeDefs;
