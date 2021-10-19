import { assocPath, repeat, evolve } from 'ramda'

export const setIsLoading = (state, { isLoading }) => {
  return { ...state, isLoading }
}

export const generateGrid = (state, { width, height }) => {
  return { ...state, grid: repeat(repeat(0, width), height) }
}

export const toggleCell = (state, { x, y }) => {
  const currentState = state.grid[y][x]
  return evolve({ grid: assocPath([y, x], currentState === 0 ? 1 : 0) }, state)
}
