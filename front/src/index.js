import React from "react";
import "./style/index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ApolloProvider,
  gql,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query getSport($id: Int!) {
    getSport(id: id) {
      id
      sport
      slot
      maxCurrent
      current
      users
    }
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
