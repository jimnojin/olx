import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import requests from '../requests/RequestsReducers'

export default combineReducers({
  routing: routerReducer,
  requests
});