import { assocPath, evolve, not } from 'ramda'
import { createMatrixOfZeros, getGridSize, getNextState } from '../../helpers/functions.js'

export const setIsLoading = (state, { isLoading }) => {
  return { ...state, isLoading }
}

export const generateGrid = (state, { width, height }) => {
  return { ...state, grid: createMatrixOfZeros(width, height) }
}

export const toggleCell = (state, { x, y }) => {
  const currentState = state.grid[y][x]
  return evolve({ grid: assocPath([y, x], currentState === 0 ? 1 : 0) }, state)
}

export const clearGrid = (state) => {
  return generateGrid(state, getGridSize(state.grid))
}

export const randomizeGrid = (state) => {
  const { width, height } = getGridSize(state.grid)
  const grid = []

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
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

export const advanceLife = (state) => {
  const { width, height } = getGridSize(state.grid)
  const grid = []

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      row.push(getNextState(x, y, state.grid))
    }
    grid.push(row)
  }

  return { ...state, grid }
}
