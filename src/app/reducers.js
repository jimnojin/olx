import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { RequestsReducers } from '../requests'
import {
  manageReducer,
  keyReducer
} from '../manage';

export default combineReducers({
  routing: routerReducer,
  manage: manageReducer,
  key: keyReducer,
  requests: RequestsReducers
});