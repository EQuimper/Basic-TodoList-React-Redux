import { applyMiddleware, compose, createStore } from "redux";
import createLogger from "redux-logger";

import rootReducers from './rootReducers';

const middleware = [
  createLogger()
]

// Middleware + DevTools Chrome
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  enhancers
);

export default store;
