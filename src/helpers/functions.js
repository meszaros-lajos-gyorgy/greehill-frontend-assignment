import { times, repeat, sum, map, filter, hasPath, __, compose, xprod, without, pathOr } from 'ramda'

export const createMatrixOfZeros = (width, height) => {
  return times(() => repeat(0, width), height)
}

export const getGridSize = (grid) => {
  return {
    width: grid.length ? grid[0].length : 0,
    height: grid.length
  }
}

export const countNeighbours = (x, y, grid) => {
  const xs = [x - 1, x, x + 1]
  const ys = [y - 1, y, y + 1]

  return compose(
    sum,
    map(([x, y]) => {
      return pathOr(0, [y, x], grid)
    }),
    filter(hasPath(__, grid)),
    without([[x, y]])
  )(xprod(xs, ys))
}

export const getNextCellState = (x, y, grid) => {
  const neighbours = countNeighbours(x, y, grid)
  const isAlive = grid[y][x] === 1

  if (isAlive) {
    return neighbours === 2 || neighbours === 3 ? 1 : 0
  } else {
    return neighbours === 3 ? 1 : 0
  }
}

export const getNextGridState = (currentGrid) => {
  const { width, height } = getGridSize(currentGrid)
  const grid = []

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      row.push(getNextCellState(x, y, currentGrid))
    }
    grid.push(row)
  }

  return grid
}

export const addGenerations = (n, initialGrid) => {
  let grid = initialGrid
  for (let i = 0; i < n; i++) {
    grid = getNextGridState(grid)
  }
  return grid
}
