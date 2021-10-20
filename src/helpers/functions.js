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

export const getNextState = (x, y, grid) => {
  const neighbours = countNeighbours(x, y, grid)
  const isAlive = grid[y][x] === 1

  if (isAlive) {
    return neighbours === 2 || neighbours === 3 ? 1 : 0
  } else {
    return neighbours === 3 ? 1 : 0
  }
}
