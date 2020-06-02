"use strict";

// const arr =[];
// console.log(arr);


// const friends = ["Polina", "Daniel", "Vika", "Vika"];
// console.log(friends);
// console.log(friends[2]); //vika
// friends[0] = "Yeva";
// console.log(friends[0]); // Yeva
// console.log(friends.length);

// friends.length = 6;
// console.log(friends.length);

// for (let i = 0; i < friends.length; i += 2) {
//     console.log("friends item: ",friends[i]);
// }

// for (let i = 0; i<3; i +=2){
//     friends.push(`friends-${i}`)
// }
// console.log(friends);

// for (const friend of friends) {
//     console.log(friend);
// }


// const name = "Polina";
// console.log(name);

// for (const symbol of name) {
//     console.log(symbol);
// }


// const house = ["flat1","flat2","flat3","flat4","flat5",] ;
// for (const flat of house) {
//     console.log(flat);
// }


// let studentName;
// console.log(studentName);
// studentName = prompt("whats your name?");
// const studentsNames = [
//     "Roy",
//     "Nick",
//     "Dave",
//     "Helen",
//     "Sarah",
//     "Charly",
//     "Bob"
// ];
// let message;
// for (const student of studentsNames) {
//     if (studentName === studentsNames) {
//         message = "is a student!";
//         break;
//     } else {
//         message = "is not a student";
//     }
// }

// console.log(`${studentName} ${message}`);


// ????
// const carsList = [
//     // "BMW",
//     // "Toyota",
//     // "Mersedes",
//     // "Porshe",
//     "Audi",
//     "Lexus",
//     "Honda",
//     "Mazda",
//     "Land Rover",
//     // "Nissan",
//     // "Subaru"
// ];


// const myCar = "Audi";
// let message;
// let car = carsList[Math.floor(carsList.length * Math.random())];
// console.log(car);


// for (car of carsList) {
//     if (car == myCar) {
//         message = "i have this car";
        
//     } else  {
//         message = "i don't have this car";
//     }
    
// }
// console.log(message);



// const nums =[1,9,54,43,2,12,8];
// const numMore = 4;
// for (let i = 0;i<nums.length;i+=1) {
//     if (nums[i]<numMore) {
//         continue;
//     }
//     console.log(`${numMore}: ${nums[i]}`);
// }


// const matrix = [
//     [1,2,3],
//     [11,22,33],
//     [111,222,333]
// ];
// // console.log(matrix[0][0]);//1
// // console.log(matrix[0][1]);//2
// // console.log(matrix[0][2]);//3
// // console.log(matrix[2][2]);//333



// let total = 0;
// for (let i = 0; i<matrix.length; i +=1){
//     console.log(matrix[i])
//     for (let j = 0; j<matrix.length; j +=1) {
//         console.log(matrix[i][j]);
//         total += matrix[i][j];
//     }
// }
// console.log(total);


//PART2

// let a = 5;
// let b = a;
// console.log(a); //5
// console.log(b); //5

// a = 10;
// console.log(a); //10
// console.log(b); //5


// let lastName = 'Peshkova';
// let newLastName = lastName;
// console.log(lastName);
// console.log(newLastName);

// lastName = 'Kawinski';
// console.log(lastName);
// console.log(newLastName);


// const units = ["alfa", "beta", "gamma"];
// const newUnits = units;
// console.log(units);
// console.log(newUnits);

// units[0] = "1";
// console.log(units);
// console.log(newUnits);

// //.push adds an element to the end
// units.push("delta")
// console.log(units);
// console.log(newUnits);

// //.unshift adds an element to the beginning
// newUnits.unshift("epsylon");
// console.log(units);
// console.log(newUnits);

// //.pop deletes the last elefent
// units.pop("");
// console.log(units);

// //.shift deletes the 1st element
// newUnits.shift();
// console.log(units);
// console.log(newUnits);

// //join
// console.log(units.join(""));
// console.log(units.join(","));

// //split
// const msg = "Welcome to my world";
// console.log(msg.split(""));
// console.log(msg.split(" "));

// //looking for elements

// //by index
// console.log(units.indexOf("beta")); //1
// console.log(units.indexOf("ddd")); // -1

// //by presence 
// console.log(units.includes("beta"));//true
// console.log(units.includes("ddd"));//false


// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//     console.log("it's a red fruit");
// }

// const fruit = prompt("name a fruit")
// const redFruits = ["apple", "strawberry", "cherry"];
// if(redFruits.includes(fruit)){
//     console.log("it's a red fruit");
// } else {
//     console.log("it's not a red fruit")
// }

// copy a massive
// .slice( a, b )
// const nums = [ 0, 1, 2, 3, 4, 5, 6, 7];
// console.log(nums.slice(0,3)); // [0, 1, 2]
// console.log(nums.slice(0,8)); // [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(nums.slice(1,2)); // [1]
// console.log(nums.slice(1)); // [1, 2, 3, 4, 5, 6, 7] //starts with a 1 and till the end
// console.log(nums.slice(3)); // [3, 4, 5, 6, 7]
// console.log(nums.slice()); // [ 0, 1, 2, 3, 4, 5, 6, 7]
// console.log(nums.slice(-1)); // [7]

// const newNums = nums.slice(-4);
// console.log(newNums);

// // .splice
// console.log(nums); // [ 0, 1, 2, 3, 4, 5, 6, 7]
// const spliceArr = nums.splice(0,2); 
// console.log(spliceArr); // [0, 1]
// console.log(nums); // [2, 3, 4, 5, 6, 7]

// console.log(nums.splice(0, 0, 1)); //[]
// console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
// console.log(nums.splice(7, 0, 8, 9)); // []
// console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(nums.splice(3, 1, "Js")); // [4]
// console.log(nums); // js instead of 4

// console.log(nums.splice(3, 3, "Js")); // ["js", 5,6]
// console.log(nums); // [1, 2, 3, "js" 7, 8, 9]

// console.log(nums.splice(3, 3, "Js", "vr")); 
// console.log(nums)// [ 1, 2, 3, "js", "vr, 9"];



// combining massives
// .concat
// const arr1 = ["hello"];
// const arr2 = ["world"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3.join(", "));


// const tests1 = [ 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const tests2 = [ 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const tests3 = [ 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];


// const allTests = tests1.concat(tests2).concat(tests3);
// console.log(allTests);



//FUNCTIONS

// const add = function (a, b, c) {
//     return a + b + c;
// }

// const result = add(1, 2, 3);
// console.log(result); // 6 


// //default parameters

// const count = function ( a = 0, b = 10, c = 1) {
//     console.log(`countFrom = ${a}, countTo = ${b}, step = ${c}`);

//     for (let i = a; i <=b; i +=c) {
//         console.log(i)
//     }
// }

// count(1,5);
// count();


// //cannot show the result until u express the funstion
// let newFunc = function(a,b,c) {
//     return a+b+c;
// }
// let result = newFunc(2,4,6);
// console.log(result);
 
// //can show the result even before u declare a function
// function newFunc2(a,b,c) {
//     return a+b-c;
// }
// console.log(newFunc2(1,2,3));

// const fn1 = function() {
//     console.log("1st function");
//     fn2();
// }
// const fn2 = function(){
//     console.log("2nd function");
// }
// fn1();


// const wannaBuy = function(meat = "chicken", eggs = "ostrich", milk = "cow") {
//     console.log(meat, eggs, milk);
// }

// wannaBuy("pork", "chicken", "coconut"); //default values didn't work out
// wannaBuy(); //default values
// wannaBuy("coconut"); //coconut instead of chicken
// wannaBuy(undefined,undefined, "coconut"); //coconut instead of cow


// const sum = function() {
//     let total = 0;

//     for (const argument of arguments) {
//         total += argument;
//     }

//     return total;
// }

// console.log(sum(4,6,12,8));//30
// console.log(sum(0,8,8,54,2))//72



// const func = (a,b,c) => a+b-c;
// console.log(func(3,4,2));


// function relative () {
//     //local func relative scope
//     if (true) {
//         //local block scope
//     }
//     //local func relative scope
//     function child() {
//         //local func child scope
//     }
// }