var number = 5; // initialize the variable called 'number' with the value of 5
var myName = "Kirin";
let myAge = 20; // only exists where its initialized
myAge = null;
const pi = 3.14; // not able to be changed

myAge = "I am ";

myAge = myAge + number; // concatenation
//console.log(myAge); // prints 'I am 5'

number *= 0.3;
//console.log(number);

//console.log("I love \"crazy\" girls"); // how to print quotations within a string

var firstName = "Quandale Dingle Berryman the 3rd";
//console.log(firstName.length); // prints the length of the string

var thirdLetterInName = firstName[2];
//console.log(thirdLetterInName);

function multiplication(a, b) {
  return a * b;
};
//console.log(multiplication(number, 73)); // creates a function that multiples 73 by a variable

var multiDimensionalArray = [ ["2", "5", "23"], ["67", "2", "75"], ["24", "13", "54"] ];
//console.log(multiDimensionalArray[2][1]); // goes to the 3rd array, grabs 2nd element

var list = ["alpha", "beta", "charlie", "delta"];
list.push("echo"); // adds "echo" to the end of the array

multiDimensionalArray.pop(); 
//console.log(multiDimensionalArray); // prints the first array

// var array = ["Mi ", "love ", "my ", "car"];
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("I ");
// console.log(array);

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

var newArray = [5, 3, 8, 1, 2];
console.log(bubbleSort(newArray)); // sorts the array in ascending order