import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://api.github.com/graphql" }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
