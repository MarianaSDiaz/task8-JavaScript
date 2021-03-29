//2) a-
var upperCase = "touppercase";
console.log(upperCase.toUpperCase());

// b-
var subtraction = "subtraction";
var sub = subtraction.substr(0, 5);
console.log(sub);

// c-
var subtraction2 = "subtraction2";
var sub2 = subtraction2.substr(9, 3);
console.log(sub2);

// d-
var upperLower = "upperLower";
var Upperlower = upperLower.substr(0, 1).toUpperCase() + upperLower.substr(1, ).toLowerCase();
console.log(Upperlower);

// e-
var blankSpace = "blank space";
var space = blankSpace.indexOf(" ");
console.log(space);

// f-
var a = "toUppercase toLowercase";
var b = a.substr(0, 1).toUpperCase() + a.substr(1, a.indexOf(' ')).toLowerCase() + a.substr(11, 1) + a.substr(12, 1).toUpperCase() + a.substr(13, 10).toLowerCase();
console.log(b);

