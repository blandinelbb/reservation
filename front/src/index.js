import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  useQuery,
  gql,
  from,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8000/graphql",
});

const EXCHANGE_RATES = gql`
  query getSport {
    id
    sport
    slot
    maxCurrent
    current
    users
  }
`;
client
  .query({
    query: EXCHANGE_RATES,
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
