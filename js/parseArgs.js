'use strict';





// module.exports = (args) => {
//   var num1,num2,operation;

module.exports = (args)=> {
  let calculator = {}

  calculator.num1 = Number(args[0])
  calculator.num2 = Number(args[2])
  calculator.operation = args[1].toLowerCase()

  return calculator
}
