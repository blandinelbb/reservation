const { ApolloServer, gql } = require("apollo-server");
const express = require("express");
const app = express();
const http = require("http");
const typeDefs = require("./Schema/TypeDefs");
const resolvers = require("./Schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 8000 }).then(({ url }) => console.log("🚀 " + url));
