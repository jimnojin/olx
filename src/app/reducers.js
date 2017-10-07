import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import requests from '../requests/RequestsReducers'
import manage from '../manage/ManageReducers';

export default combineReducers({
  routing: routerReducer,
  requests,
  manage
});