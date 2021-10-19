import { repeat } from 'ramda'

export const setIsLoading = (state, { isLoading }) => {
  return { ...state, isLoading }
}

export const generateGrid = (state, { width, height }) => {
  return { ...state, grid: repeat(repeat(0, width), height) }
}
