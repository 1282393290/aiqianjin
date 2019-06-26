import {createStore} from 'react-redux'
import finalReducer from './reducers'

export const store = createStore(finalReducer)