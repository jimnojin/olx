import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import requests from '../requests/RequestsReducers'
import {
  manageReducer,
  keyReducer
} from '../manage/ManageReducers';

export default combineReducers({
  routing: routerReducer,
  manage: manageReducer,
  key: keyReducer,
  requests  
});