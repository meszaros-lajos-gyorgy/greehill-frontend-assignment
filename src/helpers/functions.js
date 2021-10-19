export const getGridSize = (grid) => {
  return {
    width: grid.length ? grid[0].length : 0,
    height: grid.length
  }
}
