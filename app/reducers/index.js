import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import project from './project';

const rootReducer = combineReducers({
  project,
  routing
});

export default rootReducer;
