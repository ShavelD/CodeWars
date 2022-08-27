// 1
//Very simple, given an integer or a floating-point number, find its opposite.

// 10; --> -10;
// 14; --> -14;

// function opposite(number) {
//     return (-number);
// }
//2
//Given an array of integers your solution should find the smallest integer.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let smallest = args[0]

//         for (let i = 0; i < args.length; i++) {
//             if (args[i] < smallest) smallest = args[i]
//         }

//         return smallest
//     }
// }
//3
/*Given a set of numbers, return the additive inverse of each. Each positive 
becomes negatives, and the negatives become positives.*/

// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             return 0
//         } else {
//             array[i] = array[i] * -1
//             return array;
//         }
//     }
// }

// console.log(invert([1, -2, 3, 0]))

//4
/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

// function areYouPlayingBanjo(name) {
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] === 'R' || name[i] === 'r') {
//             return name + " plays banjo"
//         } else {
//             return name + " does not play banjo"
//         }
//     }
// }
//5
/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5,
 litres of water per hour of cycling.
You get given the time in hours and you need to return,
 the number of litres Nathan will drink, rounded to the smallest value.*/

// function litres(time) {
//     return Math.floor(time / 2);
// }
//6
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all,
//  of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return,
//  a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would,
//  become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(inputString) {
//     var outputString = inputString.replace(/[aeiouAEIOU]/g, "");
//     return outputString;
// }
//7
// Sentence Smash
// Write a function that takes an array of words and smashes them together,
// into a sentence and returns the sentence. You can ignore any need to sanitize,
// words or add punctuation, but you should add,
// spaces between each word. Be careful, there shouldn't be a space at the,
// beginning or the end of the sentence!

// function smash(words) {
//     return words.join(" ");
// };
//8
// Given a string, you have to return a string in which each character,
// (case-sensitive) is repeated once.

// function doubleChar(str) {
//     var newString = "";
//     for (i = 0; i < str.length; i++) {
//         newString += str[i] + str[i];
//     }
//     return newString;
// }
//9
// Make a program that filters a list of strings and returns,
// a list with only your friends name in it.
// If a name has exactly 4 letters in it, 
// you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.

// function friend(friends) {
//     return friends.filter(el => el.length === 4);
// }
//10
// Grade book
// Complete the function so that it finds the average of the,
// three scores passed to it and returns the letter value associated with that grade.

// function getGrade(s1, s2, s3) {
//     const score = (s1 + s2 + s3) / 3;
//     if (score >= 90) {
//         return 'A';
//     } else if (score >= 80) {
//         return 'B';
//     } else if (score >= 70) {
//         return 'C';
//     } else if (score >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }

//11
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// he numbering starts at 1. The format is n: string. Notice the colon and space in between.

// let number = function (array) {
//     const resultArr = [];

//     for (let i = 0, j = 1; i < array.length; i += 1) {
//         if (array.length === 0) {
//             return `Empty array should return empty array`;
//         } else {
//             resultArr.push(`${j}: ${array[i]}`);
//             j += 1;
//         }
//     }
//     return resultArr;
// }
//12
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's,
// residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem,
// of not enough space left on the bus! He wants you to write a simple program telling him if he will,
// be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// function enough(cap, on, wait) {
//     return Math.max(on + wait - cap, 0);
//   }
//13
// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     return i * 2;
// }
//14
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum ,
// of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// function countPositivesSumNegatives(input) {
//     if (input === null || input.length < 1) {
//         return [];
//     }
//     let array = [0, 0];

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] <= 0) {
//             array[1] += input[i];
//         } else {
//             array[0] += 1;
//         }
//     }
//     return array;
// }
//15
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let vowelsCount = 0;
//     let strLetters = str.split("");

//     const vowels = ["a", "e", "i", "o", "u"];
//     vowels.forEach(function (vowel) {
//         strLetters.forEach(function (inpLetter) {
//             if (inpLetter === vowel) {
//                 vowelsCount++;
//             }
//         });
//     });
//     return vowelsCount;
// }
//16
// Write a function to split a string and convert it into an array of words. For example:

// function stringToArray(string) {
//     return string.trim().split(" ");
// }
//17
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//     let res = s.split(' ');
//     let a = Infinity;

//     for (let i = 0; i < res.length; i++) {
//         a = Math.min(res[i].length, a);
//     }
//     return a;
// }
//18
// Write a function named repeater() that takes two arguments (a string and a number), 
// and returns a new string where the input string is repeated that many times.

// function repeater(string, n) {
//     //Your code goes here.
//     return string.repeat(n)
// }
//19
// JavaScript Arrays support a filter function (starting in JavaScript 1.6).
//  Use the filter functionality to complete the function given.
// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// function getEvenNumbers(numbersArray){
//   for(i=0; i < numbersArray.length; i++){
//     if(numbersArray[i] % 2 != 0){
//        numbersArray.splice(i,1)
//        i--;
//     };
//   };
//   return numbersArray;
// };

//20
// Write a function that takes an array of strings as an argument,
//     and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will,
// be different lengths, so you will not have to decide how to order,
//     multiple strings of the same length.


// function sortByLength(array) {
//     return array.sort(function (a, b) {
//         return a.length - b.length;
//     });
// }

//21
// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

//     Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highAndLow(numbers) {
//     numbers = numbers.split(" ");
//     return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers)
// }                                    

// My friend John likes to go to the cinema. He can choose between system A and system B.

// function movie(card, ticket, perc) {
//     var costA = n = 0,
//         costB = card;
//     while (Math.ceil(costB) >= costA) {
//         costA += ticket;
//         costB += ticket * Math.pow(perc,++n);
//     }
//     return n;
// };

// Filter the number
// Oh, no! The number has been mixed up with the text.
//  Your goal is to retrieve the number from the text,
//   can you return the number back to its original state?
// Task
// Your task is to return a number from a string.
// Details
// You will be given a string of numbers and letters mixed up,
//  you have to return all the numbers in that string in the order they occur.

// var FilterString = function(value) {
//     return parseInt(value.replace(/[a-z]/gi,''))
//     }

// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product . 

// function minSum(arr) {
//     const sorted = arr.sort((a, b) => a - b)
//     let sum = 0;
//     for (let i = 0; i < arr.length / 2; i++) {
//         sum += sorted[i] * sorted[sorted.length - 1 - i]
//     }
//     return sum
// }

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// function solve(arr) {
//     let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
//     for (let i = 0; i < newArr.length; i++) {
//         arr.splice(arr.indexOf(newArr[i]), 1)
//     }
//     return arr
// }

// The Story:
// Bob is working as a bus driver.However, he has become extremely popular amongst,
//     the city's residents. With so many passengers wanting to get aboard his bus, he sometimes,
// has to face the problem of not enough space left 
// on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// function enough(cap, on, wait) {
//     let total = on + wait;
//     if (total <= cap) {
//         return 0;
//     } else {
//         return total - cap;
//     }
// }

// You will be given an array of numbers.You have to sort the odd numbers
//     in ascending order while leaving the even numbers at their original positions.

// function sortArray(array) {
//     // Return a sorted array.
//     const even = array.map((elm) => elm % 2 === 0 ? elm : "");
//     const odd = array.filter((elm) => elm % 2 !== 0).sort((a, b) => a - b);
//     const result = [];

//     for (let i = 0, j = 0; i < array.length; i += 1) {
//         if (even[i] === "") {
//             result.push(odd[+j]);
//             j += 1;
//         } else {
//             result.push(even[i]);
//         }
//     }

//     return result;

// Task
// You will be given an array of numbers.You have to sort the odd numbers,
// in ascending order while leaving the even numbers at their original positions.

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }

// Implement the function unique_in_order which takes as argument a sequence and returns,
// a list of items without any elements,
// with the same value next to each other and preserving the original order of elements.

// function uniqueInOrder(iterable) {
//     const result = []
//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i + 1]) {
//             result.push(iterable[i])
//         }
//     }
//     return result
// }

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     let array = str.split("");

//     //Use the reverse method
//     array.reverse()

//     //Convert it back to a string and return
//     return array.join("")
// }

// Complete the solution so that it returns true if the,
// first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending){
//     return str.indexOf(ending, str.length - ending.length) !== -1;
//  }

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// function addBinary(a,b) {
//     return (a+b).toString(2)
//   }

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// var stringToNumber = function(str){
//     return parseInt(str);
//    }

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// function alphabetPosition(text) {
//     let result = "";
//   for (var i = 0; i < text.length; i++) {
//     let code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }
//   return result.slice(0, result.length - 1);
// }

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string / char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//     if (operation === "+") {
//         return value1 + value2
//     }
//     if (operation === "-") {
//         return value1 - value2
//     }
//     if (operation === "*") {
//         return value1 * value2
//     }
//     if (operation === "/") {
//         return value1 / value2
//     }
// }

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether
// a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i) {
//       for(j = i + 1; j < str.length; ++j) {
//         if(str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//  }

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.  Note: a and b are not ordered!

// if(a == b) {
//     return a
// }
// else if (a < b) {
//     return a + GetSum(a+1, b)
// } else {
//     return a + GetSum(a-1, b)
// };
// }

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//         if (number % 2 === 0) {
//             return 'Even';
//         } else {
//             return 'Odd';
//         }
//     }

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior),
//  stating whether the respective member is to be placed in the senior or open category.

// function openOrSenior(data) {
//     // Senior = 55+ and 7+
//     let result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
//     }

//     return result;
// }

// In this kata you will create a function that takes
// a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//     return l.filter( str => typeof str != 'string');
// }

// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// function numberToString(num) {
//     return  num.toString();
// }

// You will be given an array a and a value x. All you need to do is,
// check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// function check(a, x) {
//  return a.includes(x) ? true : false;
// }

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(str) {
//   if (str.length !== 4 && str.length !== 6) {
//     return false;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < '0' || str[i] > '9') {
//       return false;
//     }
//   }
//   return true;
// }

// Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }

// Write a function named setAlarm which receives two parameters.
// The first parameter, employed, is true whenever you are employed and the second parameter,
// vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
// Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(employed, vacation){
//     if(employed === true && vacation === true ){
//       return false
//     }
//     else if(employed === false && vacation === true ){
//       return false
//     }
//     else if(employed === false && vacation === false ){
//       return false
//     }
//       return true
//   }

// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

//     Example:
// 348597 => [7, 9, 5, 8, 4, 3]
// 0 => [0]

// function digitize(n) {

//     return n.toString().split('').reverse().map(Number);
// }

// The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer(= floored).

// For example:

// 1.08 -- > 30

// function cockroachSpeed(s) {
//     return Math.floor(s * 100000 / 3600);
// }


// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//    const z = [];

//   for (let i = 1; i <= n; i ++) {
//    let y = x * i 
//    z.push(y);

//   }
//   return z
// }

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   // Your solution here
//     let costPerDay = 40
//     let totalCost = costPerDay * d

//     if (d >= 7) {
//         totalCost -= 50
//     }
//     else if (d >= 3) {
//         totalCost -= 20
//     }

//     return totalCost
// }

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//     if (name == owner) {
//         return("Hello boss")
//     }
//     else {
//         return("Hello guest")
//     }
// }

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// function century(year) {
//     // Finish this :)
//     let bearGrills = Math.ceil(year / 100)
//     return bearGrills;
//   }

// // links to watch theory
// // https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// // https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// // 1. Simple object
// let man = {
//     name: 'John',
//     age: 28
// };

// let manFullCopy  //  your code


// // 2. Array of primitives
// let numbers = [1, 2, 3];

// let numbersFullCopy  //  your code


// // 3. Object inside an object
// let man1 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: 'Kate',
//         age: 50
//     }
// };

// let man1FullCopy // your code


// // 4. Array of primitives inside an object
// let man2 = {
//     name: 'John',
//     age: 28,
//     friends: ["Peter", "Steven", "William"]
// };

// let man2FullCopy  // your code


// // 5 Array of objects
// let people = [
//     { name: "Peter", age: 30 },
//     { name: "Steven", age: 32 },
//     { name: "William", age: 28 }
// ];


// let peopleFullCopy  // your code


// // 6 Array of objects inside object
// let man3 = {
//     name: 'John',
//     age: 28,
//     friends: [
//         { name: "Peter", age: 30 },
//         { name: "Steven", age: 32 },
//         { name: "William", age: 28 }
//     ]
// };

// let man3FullCopy //  your code


// // 7 Object inside an object, inside an object
// let man4 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         }
//     }
// };

// let man4FullCopy //  your code

// // 8 Array of objects inside object -> object
// let man5 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             { name: "Kevin", age: 80 },
//             { name: "Jennifer", age: 78 },
//         ]
//     }
// };

// let man5FullCopy //  your code


// // 9 Object inside an object -> array -> object ->  object
// let man6 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht"
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi"
//                 }
//             },
//         ]
//     }
// };

// let man6FullCopy  //  your code


// //10 Array of objects inside an object -> object -> array -> object ->  object
// let man7 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht",
//                     ingredients: [
//                         { title: "beet", amount: 3 },
//                         { title: "potatoes", amount: 5 },
//                         { title: "carrot", amount: 1 },
//                     ]
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi",
//                     ingredients: [
//                         { title: "fish", amount: 1 },
//                         { title: "rise", amount: 0.5 }
//                     ]
//                 }
//             },
//         ]
//     }
// };

// let man7FullCopy  //  your code

// Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(str) {
//     str = str.toLowerCase()   
//       return str === str.split('').reverse().join('')
      
//     }