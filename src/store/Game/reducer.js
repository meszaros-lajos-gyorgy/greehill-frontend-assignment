import { createReducer } from '../helpers.js'
import defaultState from './state.js'
import * as actions from './actions.js'

export default async () => createReducer('Game', await defaultState(), actions)
