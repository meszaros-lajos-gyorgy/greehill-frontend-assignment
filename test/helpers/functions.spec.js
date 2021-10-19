const assert = require('assert')
const { describe, it } = require('mocha')
const { isFunction } = require('ramda-adjunct')
const { createMatrixOfZeros, getGridSize, countNeighbours } = require('../../src/helpers/functions.js')

describe('createMatrixOfZeros', () => {
  it('létező függvény', () => {
    assert.ok(isFunction(createMatrixOfZeros))
  })
  it('létrehoz egy 2x2-es tömböt, ha paraméternek megkapja, hogy 2, 2', () => {
    assert.deepEqual(createMatrixOfZeros(2, 2), [
      [0, 0],
      [0, 0]
    ])
  })
  it('létrehoz egy 3x1-es tömböt, ha paraméternek megkapja, hogy 3, 1', () => {
    assert.deepEqual(createMatrixOfZeros(3, 1), [[0, 0, 0]])
  })
  it('a létrehozott tömbben a sorok más példányok', () => {
    const grid = createMatrixOfZeros(2, 3)
    assert.notStrictEqual(grid[0], grid[1])
  })
})

describe('getGridSize', () => {
  it('létező függvény', () => {
    assert.ok(isFunction(getGridSize))
  })
  // TODO: még több teszt ehhez
})

describe('countNeighbours', () => {
  it('létező függvény', () => {
    assert.ok(isFunction(countNeighbours))
  })
  it('visszaadja a középsőn kívüli számok összegét egy 3x3-as mátrixban', () => {
    const gridA = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 1, 0]
    ]
    assert.strictEqual(countNeighbours(1, 1, gridA), 3)

    const gridB = [
      [0, 0, 1],
      [1, 0, 0],
      [1, 1, 1]
    ]
    assert.strictEqual(countNeighbours(1, 1, gridB), 5)
  })
  it('visszaadja az első oszlopon és soron kívüli mezők összegét a [2,2] kivételével egy 4x4-es mátrixban', () => {
    const grid = [
      [1, 0, 1, 1],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
      [1, 1, 1, 0]
    ]
    assert.strictEqual(countNeighbours(2, 2, grid), 3)
  })
  it('nem gond, ha a koordináta a mátrix szélén van', () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 1, 0]
    ]
    assert.strictEqual(countNeighbours(0, 0, grid), 1)
  })
})
