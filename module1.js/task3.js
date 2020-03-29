"use strict";

let var1 = 1;
let var2 = 0;
let var3 = true;

console.log(var1 > var2); //true, потому что число 1>0
console.log(var1 == var3); //true, потому что в бинарном коде 1 отвечает за true, а == приводит значения к одному типу перед сравнением
console.log(var1 === var3); //false, === не приводит значения к одному типу перед сравнением
console.log(var1 != var3); //false, оператор != обозначает "не равно", а 1 равна true
console.log(var2 != var3); //true, 0 не равен true
console.log(var1 > var2 == var3); //true, var1>var2 - true, что равно var3
console.log(var1 > var2 > var3); //false, так как var1>var2 - true, true=true, то есть true>true - false

// ------ 2 ------

let va1;
console.log(va1);

va1 = "River";
console.log(isNaN(va1)); // true
console.log(typeof(va1)); // string

va1 = "Mountain";
console.log(isNaN(va1)); // true
console.log(typeof(va1)); // string

va1 = 1232;
console.log(isNaN(va1)); // false
console.log(typeof(va1)); // number

va1 = true;
console.log(isNaN(va1)); // false
console.log(typeof(va1)); // boolean

va1 = null;
console.log(isNaN(va1)); // false
console.log(typeof(va1)); // object

// ------ 3 ------

let alfa = 0.2;
let beta = 0.4;
let result = ((alfa * 10 + beta * 10)/10);
console.log(result);

// ------ 4 ------

let tetra;
tetra = 12 + "px";
console.log(tetra); //12px

tetra = 13.34 + "em";
console.log(tetra); //13.34em


// ------ 5 ------

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); //733
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); //2

// ------ 6 ------ 

let random = (Math.random() * (19-3) + 3);
random = random.toFixed(2);
console.log(random);


