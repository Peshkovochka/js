"use strict";

//-------------1-------------//
console.log("task1");

const authors = ["William Shakespeare",
"Guy de Maupassant",
"Dante Alighieri",
"Mikhail Bulgakov",
"Albert Camus",
"Erich Maria Remarque"]; 

authors.push("Honore de Balzac", "Miguel deCervantes", "Anton Chekhov" );
authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");

console.log(authors); //12 



//-------------2-------------//
console.log("task2");

const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

scores.shift();
scores.shift();
scores.pop();
scores.pop();
scores.pop();

console.log(scores); // [15, 17, 3, 4, 98, 67, 532, 611]

//-------------3-------------//
console.log("task3");

const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
const removeFromStart = results.splice(0, 2);
const removeFromEnd = results.splice(-3);

console.log(removeFromStart); //[12,32]
console.log(removeFromEnd); //[7, 100, 42]
console.log(results);//[15, 17, 3, 4, 98, 67, 532, 611]

//-------------4-------------//
console.log("task4");

const partOfResults = results.slice(2,7);
console.log(partOfResults); // [3, 4, 98, 67, 532]

//-------------5-------------//
console.log("task5");

const doubleResults = results.slice();
console.log(doubleResults); //[15, 17, 3, 4, 98, 67, 532, 611]

//-------------6-------------//
console.log("task6");

let oddResults = [];
let evenResults = [];
for (let i = 0; i < doubleResults.length; i += 1){
    console.log(doubleResults[i]);
    if (doubleResults[i] % 2 === 0) {
        evenResults.unshift(doubleResults[i])
    } else {
        oddResults.unshift(doubleResults[i])
    }
}
console.log(oddResults); //[611, 67, 3, 17, 15]
console.log(evenResults); //[532, 98, 4]


//-------------7-------------//
console.log("task7");

let AllResults = oddResults.concat(evenResults);
let includesOne = [];

for (let i = 0; i < AllResults.length; i += 1) {
    let item = AllResults[i] + "";
    if (item.includes(1)) {
        includesOne.push(+item);
    }
}
console.log(includesOne); //[611, 17, 15]
