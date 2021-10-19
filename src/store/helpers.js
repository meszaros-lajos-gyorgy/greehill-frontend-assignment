import { isFunction } from 'ramda-adjunct'

export const createReducer = (chunkName, defaultState, actions = []) => {
  return (state = defaultState, action) => {
    if (!action.type.startsWith(`${chunkName}.`)) {
      return state
    }

    const handlerName = action.type.replace(`${chunkName}.`, '')

    if (isFunction(actions[handlerName])) {
      return actions[handlerName](state, action.payload)
    }

    return state
  }
}
