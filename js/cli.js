'use strict';

const [,,...args] = process.argv

//have questions about succeeding arguments
const {num1, num2, operation} = require("./parseArgs.js")(args),
      computation = require("./calculator.js")(operation, num1, num2);
      console.log(computation)

      console.log(num1, num2, operation);
