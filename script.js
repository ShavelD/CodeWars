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