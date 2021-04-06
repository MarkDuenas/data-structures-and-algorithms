"use strict";

function multiBracketValidation(input) {
  let round = {
    open: 0,
    close: 0,
  };
  let square = {
    open: 0,
    close: 0,
  };
  let curly = {
    open: 0,
    close: 0,
  };

  if (input[0] === ")" || input[0] === "]" || input[0] === "}") {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (
      round.close > round.open ||
      curly.close > curly.open ||
      square.close > square.open
    ) {
      return false;
    }

    if (input[i] === "(") {
      round.open++;
    }
    if (input[i] === ")") {
      round.close++;
    }
    if (input[i] === "[") {
      square.open++;
    }
    if (input[i] === "]") {
      square.close++;
    }
    if (input[i] === "{") {
      curly.open++;
    }
    if (input[i] === "}") {
      curly.close++;
    }
  }
  if (
    round.open === round.close &&
    square.open === square.close &&
    curly.open === curly.close
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = multiBracketValidation;

console.log(multiBracketValidation("{{{}}}"));
console.log(multiBracketValidation("{{}}}}()()"));
console.log(multiBracketValidation("()()(()"));
