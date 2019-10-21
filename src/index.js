import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import Posts from './components/Posts';
import PostsNew from './components/PostsNew';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts/new" component={PostsNew} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
