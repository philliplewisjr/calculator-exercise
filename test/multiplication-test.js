'user strict';

const {equal, isFunction} = require('chai').assert;

const multiply = require('../js/multiplication.js')

describe('Multiply function', () => {

  it('should be a function', () => {
    isFunction(multiply)
  })

  it('that multiplies numbers', ()=> {
    equal(5, multiply(2, 2.5))
  })


})
