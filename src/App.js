import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import articles from './reducers';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';

const loggerMiddleware = createLogger();

const store = createStore(
  articles,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header title="Billin code challenge" />
      <Router>
        <Switch>
          <Route path="/:id" component={DetailPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer title="@Copyright 2017" />
    </div>
  </Provider>
);

export default App;
