import { assocPath, clone, evolve } from 'ramda'
import { addGenerations, createMatrixOfZeros, getGridSize, getNextGridState } from '../../helpers/functions.js'

export const generateGrid = (state, { width, height }) => {
  return { ...state, initialGrid: createMatrixOfZeros(width, height) }
}

export const toggleCell = (state, { x, y }) => {
  const currentState = state.initialGrid[y][x]
  return evolve({ initialGrid: assocPath([y, x], currentState === 0 ? 1 : 0) }, state)
}

export const clearGrid = (state) => {
  return generateGrid(state, getGridSize(state.initialGrid))
}

export const randomizeGrid = (state) => {
  const { width, height } = getGridSize(state.initialGrid)
  const grid = []

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      row.push(Math.round(Math.random()))
    }
    grid.push(row)
  }

  return { ...state, initialGrid: grid }
}

export const togglePlayPause = (state) => {
  if (state.isPlaying) {
    return { ...state, isPlaying: false }
  } else {
    if (state.started) {
      return { ...state, isPlaying: true }
    } else {
      return { ...state, isPlaying: true, started: true, grid: clone(state.initialGrid) }
    }
  }
}

export const advanceLife = (state) => {
  return { ...state, grid: getNextGridState(state.grid), generation: state.generation + 1 }
}

export const recedeLife = (state) => {
  return { ...state, grid: addGenerations(state.generation - 1, state.initialGrid), generation: state.generation - 1 }
}

export const resetGrid = (state) => {
  return { ...state, generation: 0, started: false }
}

export const setSpeed = (state, { speedInMilliseconds }) => {
  return { ...state, speedInMilliseconds }
}
