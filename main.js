// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    // Your answer here
    if (num1 > num2) {
        return num1
    }
    else if (num1 < num2) {
        return num2
    }
    else if (num1 === num2) {
        return "They are equal."
    }
}
console.log(max(7, 14));
console.log(max(14, 7));
console.log(max(14, 14));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

// function maxOfThree (a, b, c) {
//     return max(a, max(b, c));
// }

function maxOfThree(num1, num2, num3) {
    // Your answer here
    var x = max(num1, num2)
    if (x > num3) {
        return x;
    }
    else if (x < num3) {
        return num3;
    }
    else if (num1 === num2 && num2 === num3) {
        return "They are equal."
    }
}
console.log(maxOfThree(7, 14, 21));
console.log(maxOfThree(14, 21, 7));
console.log(maxOfThree(21, 14, 7));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    // Your answer here
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U" || char === "Y") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isVowel('e'));
console.log(isVowel('A'));
console.log(isVowel('y'));
console.log(isVowel('d'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
    var value = num1 + num2;
    return value;
}
console.log(sum(7, 14));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3) {
    var value = (num1 + num2 + num3) / 3;
    return value
}
console.log(avg(7, 14, 21));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string) {
    return string.length;
}
console.log(getLength("andrew"));



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
    if (num1 > num2) {
        return false;
    }
    else {
        return true;
    }
}

console.log(greaterThan(7, 14));
console.log(greaterThan(14, 7));





// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(string) {
    return "Hello, " + string + "!";
}
console.log(greet("Andrew"));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(a, b, c, d) {
    return a + " destroyed the " + b + " with a " + c + " and now they are " + d + "!";

}

console.log(madLib("Andrew", "house", "bulldozer", "happy"));
