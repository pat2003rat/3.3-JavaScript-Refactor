


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------
var doSomethingCool = function(){
console.log("Something Cool!");
};
// -----------------------------------------------


//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi () {
  // alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

var sayHi = function(){
  // alert("Hello, World!");

};
setTimeout(sayHi, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

// answer [c] : when running the function, the 1 in the console.log tells it to console.log the letter y in 1/1000 of a second, or 1 milisecond. Although this is an incredibly quick time, the console.log of the letter x has no command telling it to timout for a set duration. Therefore, the letter z runs first, then y, as denoted by the answer [c].
``
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};
console.log(reverseStr("hello"));
// Put your answer below -------------------------

function reverseStr(str){

var arr2 = str.split(""); arr2.reverse();str.arr2.join(""); return str;
}
console.log(reverseStr("hello"));
// -----------------------------------------------

///////////////a///////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};
// Put your answer below -------------------------

var spanishColor = function(colorName) {
var color = {
  rojo: "#ff0000",
  blanco:"#ffffff",
  azul: "#0000ff",
  verde: "#00ff00",
  negro: "#000000"

};

return color[colorName];
};
console.log(spanishColor('rojo'));

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo;
foo = "bar";
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
	for(var i = 0; i < 10; i++){
		callback();
	}
};

// Put your answer below -------------------------

function callNtimes(callback, n){
  for(var i = 0; i < n; i++){
		callback();
  }
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------

(function(){
  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;

};
}());

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

// var addNumbers = function(numberA, numberB) {
//   console.log(numberA + numberB);
// };
//
// var twoPlusTwo = addNumbers(2, 2);
// console.log(twoPlusTwo);

// Put your answer below -------------------------

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
  return numberA + numberB
};

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {

  return speed += amount;

};
console.log(accelerate());
// Put your answer below -------------------------

//It is returning NaN because the amount is undefined
//when you add something to undefined, it shows as NaN because
//undefined is not a number and adding a number makes it NaN

var speed = 0;

var accelerate = function(amount) {
  if(amount === 0){
    speed += 1;
  }else{
    speed += amount;
  }
};
accelerate();


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
