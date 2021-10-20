const assert = require('assert')
const { describe, it } = require('mocha')
const { isFunction } = require('ramda-adjunct')
const { createMatrixOfZeros, getGridSize, countNeighbours, getNextState } = require('../../src/helpers/functions.js')

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
  it('0 értékeket ad vissza, ha a tömb üres', () => {
    assert.deepStrictEqual(getGridSize([]), { width: 0, height: 0 })
  })
  // TODO: még több teszt
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
    assert.strictEqual(countNeighbours(1, 1, gridA), 3, 'gridA-nál 3 szomszéd van')

    const gridB = [
      [0, 0, 1],
      [1, 0, 0],
      [1, 1, 1]
    ]
    assert.strictEqual(countNeighbours(1, 1, gridB), 5, 'gridB-nél 5 szomszéd van')
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

describe('getNextState', () => {
  it('létező függvény', () => {
    assert.ok(isFunction(getNextState))
  })
  it('ha az adott 1-et tartalmazó cella körül kevesebb, mint 2 szomszéd van, akkor 0-t ad vissza', () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
    assert.strictEqual(getNextState(1, 1, grid), 0)
  })
  it('ha az adott 1-et tartalmazó cella körül 2, vagy 3 szomszéd van, akkor 1-el tér vissza', () => {
    const grid = [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ]
    assert.strictEqual(getNextState(1, 1, grid), 1)
  })
  it('ha az adott 1-et tartalmazó cella körül több, mint 3 szomszéd van, akkor 0-val tér vissza', () => {
    const grid = [
      [0, 1, 1],
      [0, 1, 1],
      [1, 1, 1]
    ]
    assert.strictEqual(getNextState(1, 1, grid), 0)
  })
  it('ha az adott 0-t tartalmazó cella körül pontosan 3 szomszédvan, akkor 1-el tér vissza', () => {
    const gridA = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0]
    ]
    assert.strictEqual(getNextState(1, 1, gridA), 1, 'gridA-nál 3 szomszéd van -> 1')

    const gridB = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 0, 0]
    ]
    assert.strictEqual(getNextState(1, 1, gridB), 0, 'gridB-nél 2 szomszéd van -> 0')

    const gridC = [
      [0, 1, 1],
      [0, 0, 1],
      [1, 0, 0]
    ]
    assert.strictEqual(getNextState(1, 1, gridC), 0, 'gridC-nél 4 szomszéd van -> 0')
  })
})
