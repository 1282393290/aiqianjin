import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import finalReducer from './reducers'

export default createStore(finalReducer,
  applyMiddleware(thunk))