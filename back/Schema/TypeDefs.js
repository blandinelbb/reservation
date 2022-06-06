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
    annulerTennis: [sports]
    reserverTennis: [sports]
    annulerJudo: [sports]
    reserverJudo: [sports]
    annulerCombat: [sports]
    reserverCombat: [sports]
    annulerZumba: [sports]
    reserverZumba: [sports]
    annulerBoxe: [sports]
    reserverBoxe: [sports]
  }
`;

module.exports = typeDefs;
