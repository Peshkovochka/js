"use strict";

//OBJECTS

// const objects = {
//     key: value,
//     key: value
// }

// const frontend = {
//     lang1: "html",
//     lang2: "css",
//     lang3: "js"
// }
// console.log(frontend);

// const student = {
//     name: "Polina",
//     age: 15,
//     sex: "female",
//     course: frontend
// }
// console.log(student);

// //object.key
// console.log(student.name);
// //object["key"]
// console.log(frontend["lang2"]);

// student.age = 16;
// console.log(student.age);//16

// student.inst = "peshkovochka";
// console.log(student.inst);
// console.log(student);

// delete frontend.lang1;
// console.log(frontend);

// //short properties
// const myTeacher = "Sasha";
// const course = "frontend";
// const group = {
//     myTeacher,
//     course
// };
// console.log(group);


// const key = "test";
// const getKey = function() {
//     return "score";
// };

// const testResult = {
//     [key]: "2",
//     [getKey()]: 22
// };
// console.log(testResult);//{test: "2", score: 22}


// const myProducts = {
//     milk: 0.5,
//     eggs: 10,
//     apples: 5,
//     toCheck() {
//         console.log("check the value");
//     },
//     oranges: 10
// }
// console.log(myProducts);

// myProducts.toBuySweets = function() {
//     console.log("just buy sweets already");
// };
// myProducts.toBuySweets();
// console.log(myProducts);

// delete myProducts.toBuySweets;
// console.log(myProducts);

// const product = {
//     type: "wellness & spa",
//     category: "haircare",
//     productName: "shampoo",
//     price: 80,
//     showProductName(){
//         console.log(this.productName);
//     },
//     changePrice(value){
//         this.price = value;
//     }
// }

// product.showProductName(); //shampoo

// product.changePrice(90);
// console.log(product.price);//90


// // FOR ... IN
// const myCars = {
//     subaru: "forester",
//     bmw: "x5",
//     ford: "mustang69",
//     landRover: "range rover",
//     tesla: "modelX"
// }

// for (const key in myCars) {
//     console.log("key:", key);
// }

// // key: subaru
// // key: bmw
// // key: ford
// // key: landRover
// // key: tesla

// for (const key in myCars) {
//     console.log("value:", myCars[key]);
// }

// value: forester
// value: x5
// value: mustang69
// value: range rover
// value: modelX


// const hero = {
//     name: "CJ",
//     power: 100,
//     lifes: 10,
//     feature: "music",
// };

// //Object.keys(obj) - returns a massive with keys
// const keysOfHero = Object.keys(hero);
// console.log(keysOfHero); // ["name", "power", "lifes", "feature"]

// //Object.values(obj) - returns a massive with values
// const valuesOfHero = Object.values(hero);
// console.log(valuesOfHero); // ["CJ", 100, 10, "music"]

// for( const key of keysOfHero) {
//     console.log("key:", key);
//     console.log("value:", hero[key]);
// }


// const entriesOfHero = Object.entries(hero);
// console.log(entriesOfHero);

// for (entry of entriesOfHero) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }

// const testScore = {
//     t1: 16,
//     t2: 23,
//     t3: 10,
//     t4: 21

// }

// const arrValues = Object.values(testScore);
// console.log(arrValues);

// let totalScore = 0;

// for(const value of arrValues) {
//     totalScore +=value;
// }
// console.log(totalScore); // 70

// // D E S T R U C T U R I N G {objects}

// const hotel = {
//     hotelName: "Resort Hotel",
//     stars: 5,
//     capacity: 100
// };
// console.log(hotel);

// const { hotelName, stars, status = 5 } = hotel;
// console.log(hotel);
// console.log(`hotel name - ${hotelName}, stars - ${stars}, status - ${status}`);


// let myProducts = {
//     fruits: "apples",
//     vegetables: "tomatoes"
// }
// console.log(myProducts.fruits);//apples //before destructuring

// let {fruits, vegetables} = myProducts;
// console.log(fruits);//apples //after destructuring
// console.log(vegetables);

// const hotel2 = {
//     name2: "something like a name",
//     stars2: 6,
//     capacity: 150,
//     rooms: 75
// };
// const { name2, ...rest} = hotel2;
// console.log(rest); //{stars2: 6, capacity: 150, rooms: 75}


// const rgb = [100, 200, 255];
// const [red, green, blue] = rgb; 
// const [, , blue2] = rgb;
// console.log(rgb);