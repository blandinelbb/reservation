const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./Schema/TypeDefs");
const resolvers = require("./Schema/resolvers");
const data = require("./data");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 8000 }).then(({ url }) => console.log(url));
