// 3) a-
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4], months[10]);

// b-
months.sort();
console.log(months);

// c-
months.unshift("month1");
months.push("lastMonth");
console.log(months);

// d-
months.shift();
months.pop();
console.log(months);

// e-
months.reverse();
console.log(months);

// f-
var join = months.join("-");
console.log(join);

// g-
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = months.slice(4, 11);
console.log(copy);