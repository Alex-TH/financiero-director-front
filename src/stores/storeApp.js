import { createStore, applyMiddleware, combineReducers } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';

const reducers = {};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(CreateJumpstateMiddleware())
);

export default store;
