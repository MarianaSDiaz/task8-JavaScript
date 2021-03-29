// 4) a-
var random = Math.random()
if (random > 0.4) {
    alert("Greater than 0,5")
} else {
    alert("Lower than 0,5")
};
console.log(random);

// b-
var age = 29
if (age < 2) {
    alert("Is a baby")
} else if (age <= 12 ) {
    alert("Is a kid")
} else if (age <= 19 ) {
    alert("Is a teen")
} else if (age <= 30 ) {
    alert("Is young (?)")
} else if (age <= 60 ) {
    alert("Is an adult")
} else if (age <= 75 ) {
    alert("Is an older adult")
} else {
    alert("Is an old man")
};
