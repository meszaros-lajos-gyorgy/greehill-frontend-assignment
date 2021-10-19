const assert = require('assert')
const { describe, it } = require('mocha')
const { isFunction } = require('ramda-adjunct')
const { getGridSize } = require('../../src/helpers/functions.js')

describe('getGridSize', () => {
  it('létező függvény', () => {
    assert.ok(isFunction(getGridSize))
  })
})
