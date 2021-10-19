const assert = require('assert')
const { describe, it } = require('mocha')
const { isFunction } = require('ramda-adjunct')
const { getGridSize, createMatrixOfZeros } = require('../../src/helpers/functions.js')

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
})
