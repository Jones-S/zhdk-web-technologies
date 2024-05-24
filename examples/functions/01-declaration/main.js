// Function declaration
function greet1() {
  console.log("Hello, world!");
}

// Function expression
const greet2 = function() {
  console.log("Hello, world!");
};

// Arrow function expression
const greet3 = () => {
  console.log("Hello, world!");
};

// Method declaration in an object
const obj = {
  greet4: function() {
    console.log("Hello, world!");
  }
};

// ES6 shorthand method definition
const obj2 = {
  greet5() {
    console.log("Hello, world!");
  }
};

// Method using function constructor
const greet6 = new Function('console.log("Hello, world!");');