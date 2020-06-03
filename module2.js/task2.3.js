"use strict";

//task 1
const toPassTests = function(){
    alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!");
};
toPassTests();

const toPassTests2 = () => alert("Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!");
toPassTests2();


//task 2
const age = prompt("enter your age");
const checkAge = function(){
    if (age >= 18) {
        alert("Here you are! You are got access!");
    } else {
        alert("Sorry, you can't get access");
    }
};
checkAge();

const checkAge2 = () => {if (age >= 18) {
    alert("Here you are! You are got access!");
} else {
    alert("Sorry, you can't get access");
}};
checkAge2();

//task 3
const toGetCost = function(message, pricePerWord) {
    message = message.split(" ");
    let price = message.length*pricePerWord;
    return price; 
};
console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

const toGetCost2 = (message, pricePerWord) => {
    message = message.split(" ");
    let price = message.length*pricePerWord;
    return price; 
}
console.log(toGetCost2("To be, or not to be, that is the question", 10)); // 100
console.log(toGetCost2("Whether 'tis nobler in the mind to suffer", 20)); // 160
console.log(toGetCost2("The slings and arrows of outrageous fortune,", 40)); // 280
console.log(toGetCost2("Or to take arms against a sea of troubles", 20)); // 180

// //task 4 
const logItems = function(array) {
    for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
    }
};

logItems([
    "Wolverine",
    "Thor",
    "Iron Man",
    "Deadpool",
    "Nick Fury",
    "Colossus",
]);

logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
//task 5

const checkTheWord = function(message){
    if (message.includes("lose")){
        return true;
    } else if (message.includes("not")){
        return true;
    } else {
        return false;
    }
};

console.log(checkTheWord("Than fly to others that we know not of?")); //true
console.log(checkTheWord("Thus conscience does make cowards of us all")); //false
console.log(checkTheWord("And enterprises of great pitch and moment")); // false
console.log(checkTheWord("And lose the name of action")); //true
  
const checkTheWord2 = (message) => {if (message.includes("lose")){
    return true;
} else if (message.includes("not")){
    return true;
} else {
    return false;
}};
console.log(checkTheWord2("Than fly to others that we know not of?")); //true
console.log(checkTheWord2("Thus conscience does make cowards of us all")); //false
console.log(checkTheWord2("And enterprises of great pitch and moment")); // false
console.log(checkTheWord2("And lose the name of action"));//true

//task 6

const countTestsScore = function(){
    let totalSum = 0;
    for (const argument of arguments){
        totalSum += argument;
    };
    return totalSum;
};

console.log(countTestsScore(16, 22, 23));//61
console.log(countTestsScore(15, 20, 22, 20));//77
console.log(countTestsScore(14, 19, 21, 20, 23));//97

//task 7

const myNewArrowFunction = (...args) => console.log(args);
myNewArrowFunction(1, 2, 3); //[1,2,3]
myNewArrowFunction(100, 200, 300, 400, 500); // [100, 200, 300, 400, 500]
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); // ["Js", "Python", "Java", "PHP", "C++"]




