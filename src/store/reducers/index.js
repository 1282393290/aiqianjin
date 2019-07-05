import { combineReducers } from 'redux'
import { homeReducer } from './home'
import { aboutReducer } from './about'
import { introduceReducer } from './introduce'

export default combineReducers({
  homeReducer,
  aboutReducer,
  introduceReducer
})
