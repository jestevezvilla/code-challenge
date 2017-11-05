import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
//
import rootSaga from './sagas';
import reducers from './reducers';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer =
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
    loggerMiddleware,
  ));

const store = createStore(
  reducers,
  enhancer,
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <ApolloProvider client={client} store={store}>
    <div className="App">
      <Header title="Authors" />
      <Router>
        <Switch>
          <Route path="/:id" component={DetailPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer title="@Copyright 2017" />
    </div>
  </ApolloProvider>
);

export default App;
