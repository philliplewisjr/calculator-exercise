'user strict';

const {equal, isFunction} = require('chai').assert;

const subtract = require('../js/subtract.js');

describe("Subtract function", () => {

  it("should be a function", () => {
    isFunction(subtract);
  })

  it("that subtracts two numbers", () =>{
    equal(4, subtract(8, 4))
  })

})
