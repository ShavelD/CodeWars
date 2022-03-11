//Very simple, given an integer or a floating-point number, find its opposite.

// 10; --> -10;
// 14; --> -14;

// function opposite(number) {
//     return (-number);
// }

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

/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5,
 litres of water per hour of cycling.
You get given the time in hours and you need to return,
 the number of litres Nathan will drink, rounded to the smallest value.*/

// function litres(time) {
//     return Math.floor(time / 2);
// }

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

// Sentence Smash
// Write a function that takes an array of words and smashes them together,
// into a sentence and returns the sentence. You can ignore any need to sanitize,
// words or add punctuation, but you should add,
// spaces between each word. Be careful, there shouldn't be a space at the,
// beginning or the end of the sentence!

// function smash(words) {
//     return words.join(" ");
// };

// Given a string, you have to return a string in which each character,
// (case-sensitive) is repeated once.

// function doubleChar(str) {
//     var newString = "";
//     for (i = 0; i < str.length; i++) {
//         newString += str[i] + str[i];
//     }
//     return newString;
// }

// Make a program that filters a list of strings and returns,
// a list with only your friends name in it.
// If a name has exactly 4 letters in it, 
// you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.

// function friend(friends) {
//     return friends.filter(el => el.length === 4);
// }

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

// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     return i * 2;
// }

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

// Write a function to split a string and convert it into an array of words. For example:

// function stringToArray(string) {
//     return string.trim().split(" ");
// }

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

// Write a function named repeater() that takes two arguments (a string and a number), 
// and returns a new string where the input string is repeated that many times.

// function repeater(string, n) {
//     //Your code goes here.
//     return string.repeat(n)
// }