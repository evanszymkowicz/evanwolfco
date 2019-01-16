/* globals __DEVELOPMENT__ */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from 'redux/modules/reducer';
import 'theme/globalStyles';
import createRoutes from './routes';
import { loadTracks, middleware as audiosMiddleware } from 'redux/modules/audios';
import clientMiddleware from 'redux/middlewares/clientMiddleware';
import ReallySmoothScroll from 'really-smooth-scroll';
import createHistory from 'history/createHashHistory'

const history = createHistory();

ReallySmoothScroll.shim();

require("font-awesome-webpack");

const middleware = [
  routerMiddleware(history),
  audiosMiddleware,
  clientMiddleware(),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware))
);

loadTracks(store);

history.listen((location) => {
  window.oldScrollTo(0, 0);
});

ReactDOM.render(
  <Provider store={store}>
    {createRoutes(store, history)}
  </Provider>,
  document.getElementById('root')
)
