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