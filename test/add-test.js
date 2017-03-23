"use strict";

const {equal, isFunction} = require('chai').assert;
const add = require('../js/add.js');

describe("Add function", () => {

it("should be a function ", () => {
  isFunction(add);
})

it("that adds two numbers", () => {
equal(4, add( 1, 3))
})

})
