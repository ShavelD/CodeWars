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