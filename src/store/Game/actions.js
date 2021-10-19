import { assocPath, repeat, evolve, not } from 'ramda'
import { getGridSize } from '../../helpers/functions.js'

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

export const clearGrid = (state) => {
  return generateGrid(state, getGridSize(state.grid))
}

export const randomize = (state, { width, height }) => {
  const grid = []

  for (let y = 0; y < width; y++) {
    const row = []
    for (let x = 0; x < height; x++) {
      row.push(Math.round(Math.random()))
    }
    grid.push(row)
  }

  return { ...state, grid }
}

export const togglePlayPause = (state) => {
  return evolve(
    {
      isPlaying: not
    },
    state
  )
}
