"use strict";

// // //CALLBACK
//функция обратного вызова
//функция - параметр другой функции

// //===1===
// const highOrderFunc = function(callbackFunc) {
//     const message = "This is how callback works";
//     callbackFunc(message);
// };
// //highOrderFunc(); //Uncaught TypeError: callbackFunc is not a function at highOrderFunc
// const showMessage = function(show) {
//     console.log(show);
// };
// highOrderFunc(showMessage);


// //===2===
// const printMessage =function(message) {
//     console.log(message);
// };
// const higherOrderFunction = function(callback) {
//     const string = "amazing!";
//     callback(string);
// };
// higherOrderFunction(printMessage);


// //===3===
// const showHeroes = function(heroes) {
//     console.log(heroes);
// }

// const mainFunc = function(callback) {
//     //const hero = "Spider Man";
//     const heroes = ["Iron Man", "Ant Man", "Captain America"];
//     for (const hero of heroes) {
//         callback(hero);
//     }
// }

// // // abstract repetition
// const repeatLog = function(n) {
//     let result;
//     for (let i = 0; i < n; i +=1) {
//         result = i
//         console.log(i); //each iteration
//     }
//     console.log(result); //last iteration
// };
// repeatLog(6);


// const showResult = function(result){
//     console.log(result);
// };
// const showResultWithComment = function(value){
//     console.log("number: ", value );
// }
// const repeat = function (num, action) {
//     for (let i = 0; i < num; i += 1) {
//         action(i);
//     }
// };
// repeat (4, showResult); 
// repeat (3, showResultWithComment);


// const myArr =[];
// console.log(myArr); 
// // 0: "element 1"
// // 1: "element 2"
// // 2: "element 3"
// // 3: "element 4"
// // 4: "element 5"

// repeat (5, (value) => {
//     myArr.push(`element ${value+1}`);
// } );

// console.log(myArr); 
// //["element 1", "element 2", "element 3", "element 4", "element 5"]


// const filterFunc = function (array, cbFunc) {
//     const filterredArr = []; //a massive for filtered 
//     for (const el of array ){
//         const ok = cbFunc(el);

//         if (ok) {
//             filterredArr.push(el);
//         }  
//     }
//     return filterredArr;
// }


// const fruits = [
//     { name: "apples", quantity: 200, isFresh: true},
//     { name: "grapes", quantity: 150, isFresh: false},
//     { name: "bananas", quantity: 100, isFresh: true},
// ];

// const freshFruits = filterFunc(fruits, (fruit) => fruit.isFresh);
// console.log("only fresh: ", freshFruits);

// const fruitsWithQuantity = filterFunc(fruits, (fruit) => fruit.quantity >= 120);
// console.log("enough: ", fruitsWithQuantity);




//CALLSTACK
//structure : lifo (last in, first out)

//1st function goes to the very bottom, and etc
//execction from the top

// const secondCildFunc = function() {
//     console.log("2nd is completed");
// };

// const firstCildFunc = function() {
//     console.log("1st is completed");
//     secondCildFunc();
// };

// const parentFunc = function () {
//     console.log("parent func started executing");
//     firstCildFunc();
//     //secondCildFunc();
//     console.log("parent func finished execuring");
// };
// parentFunc();




//LEXICAL ENVIRONMENT 
// list of all the things used somewhere

// const x =10;
// const y = 20;
// const summ = function (z) {
//     z = 30;
//     const x = 100;
//     return console.log(x+y+z);
// }

// summ(30); // local x + global y + z




//CLOSURE

// const createCounter = function () {
//     let privateValue = 0;
//     const increment = function(){
//         privateValue += 1;
//         console.log(privateValue);
//     };
//     return {
//         increment,
//         // decrement,
//     };
// };

// const counterA = createCounter();
// counterA.increment(); //1
// counterA.increment(); //2
// counterA.increment(); //3
// counterA.increment(); //4
// counterA.increment(); //5



const makeDish = function(chiefName, dish) {
    console.log(`${chiefName} cooked ${dish}`)
};

makeDish("Polina", "soup");
makeDish("Daniel", "steak");
makeDish("Eva", "salad");
makeDish("Illia", "desserts");

const makeChief = function(name) {
    return function makeDish(dish) {
        console.log(`${name} now cooks ${dish}`)
    };
};

const kiril = makeChief("Kiril");
kiril("cake");

const dima = makeChief("Dima");
dima("fish");



const petya = {
    name: "Petya",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.name);
    },
}
petya.showThis();
petya.showName();


function showThis() {
    console.log("this is showThis:", this);
}

showThis();



const user = {name: "Margo"};
user.showContext = showThis;
user.showContext();


const hotel = {
    name: "rixos",
    showThis() {
        console.log(this);
    },

}
const func = function(callback) {
    callback();
}
func(hotel.showThis); //undefined


const showThis1 = () => {
    console.log("this is showThis1:", this);
};

const user1 = { name: "CJ"};
user1.showContext = showThis1;

user1.showContext();


const hotel2 = {
    name:"Rixos Hotel",
    showThis(){
        const fn = () => {
            console.log("this is fn:",this);
        };
        fn();
        console.log("this is showThis: ", this)
    },
};
hotel2.showThis();

const hotel3 = {
    name: "rixos hotel",
    showThis: function showThis(){
        const context = this;
        const fn = function fn(){
            console.log("this is fn:", context);
        };
    },
}

hotel3.showThis();


const greet = function(){
    return `Welcome to ${this.name} `;
};
const hotel4 = {name: "Another hotel"};
// console.log(greet(hotel4)); //cannot read property 'name'
console.log(greet.call(hotel4));
console.log(greet.apply(hotel4));

const greet1 = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name} `;
};

const hotel5 = {name: "one more hotel"};
console.log(greet1.call(hotel5, "Ola", "5")); //Ola, welcome to 5-star one more hotel


//bind
const greet3 = function(guest) {
    return `${guest}, you're now in ${this.name}`;
};

const hotel7 = {name: "a hotel, again!"}
const hotelGreeter = greet3.bind(hotel7, "Justin");
console.log(hotelGreeter());


const hotel8 = {
    name: "rixos",
    showThis() {
        console.log(this);
    },
};
const fn1 = function (callback) {
    callback();
};
fn1(hotel8.showThis.bind(hotel8)); //{name: "rixos", showThis: ƒ}