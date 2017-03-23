'use strict';

const {equal, isFunction} = require('chai').assert;

const divide = require('../js/division.js')


describe('The division', () => {

it('is a function', () => {
  isFunction(divide)
});
it('that divides numbers', () => {
  equal(6, divide(48, 8))
})

});
