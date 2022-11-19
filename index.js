// while loop
// syntax
/*
while ( condition ) {
  statements
  inc/dec the value used in condition
}
*/

var i = 0;

while ( i < 2 ) {
  console.log('Hello World');
  i++; // i = i + 1
}

// use while loop to find factorial of a number
/**
 * INPUT: 4
 * OUTPUT: 24
 * INPUT: 5
 * OUTPUT: 120
 * 
 *  */

// Problem: use while loop to iterate an array
var arr = [1,2,3,4,5,6,7,8,9];
var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// reverse iteration
var j = arr.length - 1;
while (j >= 0) {
  console.log(arr[j]);
  j--;
}

// Switch ---> combining multipe conditions together
var str = 'B42WEENG';

// syntax
/*
switch(value) {
  case <case-value>:
    statement with value;
    break;
  case <case-value>:
    statement with value;
    break;
  default:
    default statement with value;
}
*/

switch(str) {
  case 'B42WEENG':
    console.log('10AM');
    break;
  case 'B39WEENG':
    console.log('2PM');
    break;
  default:
    console.log('9AM');
}


const a = 10;
const b = 20;

var operator = '*';
switch (operator) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
  case 'x':
    console.log(a * b);
    break;
  
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// frequency of number/chars in array or string
var line1ArrStr = userInput[0].split(' ');
    
// store the occurences in obj
var occurencesObj = {};

for(var i=0;i<line1ArrStr.length;i++) {
    if (occurencesObj[line1ArrStr[i]]) {
        occurencesObj[line1ArrStr[i]] = occurencesObj[line1ArrStr[i]] + 1;
    } else {
        occurencesObj[line1ArrStr[i]] = 1;
    }
}

var keys = Object.keys(occurencesObj);

for(var j=0;j<keys.length;j++) {
    console.log(keys[j] + '-->' + occurencesObj[keys[j]]);
}

// Prime Number ---> 
// Number which divisble only by itself and one
// print PRIME if num is prime else NON PRIME
// INPUT is always > 1

// 2 ---> PRIME
// 3 ---> PRIME
// 4 ---> NON PRIME
// 11 ---> PRIME
// 9 ---> NON PRIME
// 13 ---> PRIME


var x = 11;

// 11 ---> 1 - 5 can divid, other  6 - 10 --> do not divide
// 4 ---> 1 - 2 can divid, other 3 --> do not divide
// 7 ---> 1 - 2 can divide, other 4 - 6 --> do not divide




var isPrime = true; // flag --> intially we consider as prime value
// checking for divisiblity
for(var i=2; i <= Math.round(x / 2) ; i++) {
  if ( x % i === 0 ) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("PRIME");
} else {
  console.log('NON PRIME');
}

var x = 53;

// <= sqrt of 9  --> 3, so, 1, 2, 3 divided
// <= sqrt of 12 --> 3.5, so, 1, 2 , 3 divided

var isPrime = true; // flag --> intially we consider as prime value
// checking for divisiblity
for(var i=2; i <= Math.sqrt(x) ; i++) {
  if ( x % i === 0 ) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("PRIME");
} else {
  console.log('NON PRIME');
}

