import { createStore, combineReducers } from 'redux'
import GameReducer from './Game/reducer.js'

export const getStore = async () => {
  return createStore(
    combineReducers({
      Game: await GameReducer()
    })
  )
}
