import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client'

const cache = new InMemoryCache({})


const client = new ApolloClient({
  uri: "localhost:5000/graphql",
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
      <App />
    </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
