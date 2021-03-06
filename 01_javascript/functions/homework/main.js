console.log('222');

// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNum = function ( num ) {
    console.log('Square of ' + num + ' is ' + num * num);
    return num * num;
}

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNum = function ( num ) {
    var result = num/2;
    return result;
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function ( n1, n2 ) {
    return n1 / n2 * 100 + "%";
}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaCircle = function ( r ) {
    return Math.PI() * r * r;
}

// Bonus: Round the result so there are only two digits after the decimal.
// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var maths = function ( n ) {
    var result = halfNum(n);
    result = squareNum( result );
    result = areaCircle( result );
    result = percentOf(n, n2);
    return result;
}

// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


var drEvil = function ( n ) {
    if ( n >= 1000000 ) {
        return n + ' dollars pinky';
    } else {
        return 'dollars';
    }
}

// MixUp

//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (s1, s2) {

    // GET FRONT TEXT
    var s1frontText = s1.slice(0, 2);
    // console.log(s1frontText);
    var s2frontText = s2.slice(0, 2);
    // console.log(s2frontText);

    // GET BACK TEXT
    var s1BackText = s1.slice(2, s1.length);
    // console.log(s1BackText);

    var s2BackText = s2.slice(2, s2.length);
    // console.log(s2BackText);


    // MIX UP
    var mixUp = s2frontText + s1BackText + ' ' + s1frontText + s2BackText;
    console.log(mixUp);


    return s1 + s2;
}

// mixUp('MARSH', 'BENDOVER    ');

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function ( string ) {



}

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function ( string ) {

    var last3Letters = string.slice(string.length - 3, string.length);
    var lessLast3Letters = string.slice(0, string.length -3);
    var result;

    console.log(lessLast3Letters);
    console.log(last3Letters);

    if (string.length >= 3) {
        if (last3Letters === 'ing') {
            result = lessLast3Letters + 'ly';
            return result;
        } else {
            result = string + 'ing';
            return result;
        }
    }
}

console.log(verbing('jeremy'));

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function (string) {
    var instanceOfNot = string.indexOf('not');
    var instanceofBad = string.indexOf('bad'); 
    console.log(instanceOfNot, " ", instanceofBad);
}
