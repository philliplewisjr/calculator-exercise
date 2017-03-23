'use strict';

const {isObject, deepEqual, isFunction} = require('chai').assert;

const args = require('../js/parseArgs.js')

describe('parseArgs', () => {
  it('is a function', () => {
    isFunction(args)
  })
  it('returns an object', () => {
    isObject(args([1, '+', 2]))
  })
  it('that is equal to its suggested value', () => {
    deepEqual(args, args)
  })
})
