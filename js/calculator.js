'use strict';


const add = require("./add"),
       mulitply = require("./multiplication"),
       subtract = require("./subtract"),
       divide = require("./division");





//calculates arguments
module.exports = (operation, num1, num2 )=> {

  if(operation === "+") {
    return add(num1, num2)
  } else if (operation === "-") {
    return subtract(num1, num2)
  } else if (operation === "/") {
    return divide(num1, num2)
  } else if (operation === "x") {
    return multiply(num1,num2)
  } else if (!operation) {
    console.log("please do a proper operation")
  }

}
