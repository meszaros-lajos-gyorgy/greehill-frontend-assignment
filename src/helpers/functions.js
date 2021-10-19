export const getGridSize = (grid) => {
  return {
    width: grid.length ? grid[0].length : 0,
    height: grid.length
  }
}

export const getNextState = (x, y, grid) => {
  const currentState = grid[y][x]

  return currentState === 1 ? 0 : 1
}
