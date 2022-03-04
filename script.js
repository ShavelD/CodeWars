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
