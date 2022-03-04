//Very simple, given an integer or a floating-point number, find its opposite.

10; --> -10;
14; --> -14;

function opposite(number) {
    return (-number);
}

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0]

        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallest) smallest = args[i]
        }

        return smallest
    }
}

/*Given a set of numbers, return the additive inverse of each. Each positive 
becomes negatives, and the negatives become positives.*/

function invert(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            return 0
        } else {
            array[i] = array[i] * -1
            return array;
        }
    }
}

console.log(invert([1, -2, 3, 0]))


/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

function areYouPlayingBanjo(name) {
    for (let i = 0; i < name.length; i++) {
        if (name[i] === 'R' || name[i] === 'r') {
            return name + " plays banjo"
        } else {
            return name + " does not play banjo"
        }
    }
}

/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5,
 litres of water per hour of cycling.
You get given the time in hours and you need to return,
 the number of litres Nathan will drink, rounded to the smallest value.*/

function litres(time) {
    return Math.floor(time / 2);
}

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all,
//  of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return,
//  a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would,
//  become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(inputString) {
    var outputString = inputString.replace(/[aeiouAEIOU]/g, "");
    return outputString;
}

// Sentence Smash
// Write a function that takes an array of words and smashes them together,
// into a sentence and returns the sentence. You can ignore any need to sanitize,
// words or add punctuation, but you should add,
// spaces between each word. Be careful, there shouldn't be a space at the,
// beginning or the end of the sentence!

function smash(words) {
    return words.join(" ");
};

// Given a string, you have to return a string in which each character,
// (case-sensitive) is repeated once.

function doubleChar(str) {
    var newString = "";
    for (i = 0; i < str.length; i++) {
        newString += str[i] + str[i];
    }
    return newString;
}

// Make a program that filters a list of strings and returns,
// a list with only your friends name in it.
// If a name has exactly 4 letters in it, 
// you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.

function friend(friends) {
    return friends.filter(el => el.length === 4);
}

// Grade book
// Complete the function so that it finds the average of the,
// three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3;
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }