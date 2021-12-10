import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css';

import App from "./App";

const client = new ApolloClient({
  // uri: "https://gottacatchthemall1.herokuapp.com/",
  uri: "https://gottacatchthemall1.herokuapp.com/",
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
