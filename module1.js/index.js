"use strict";

// /*let a = 2;
// a = "JavaScript";
// console.log(a);
// console.log(typeof a);

// a = "true";
// console.log(a);
// // console.log(typeof a);

// let b;
// console.log(b);
// console.log(typeof b);
// b = 5;

// console.log(c);

// var c = 10;
// c = 15;
// console.log(c);

// const d = 6;
// // d=7;
// console.log(d);

// // let age //Age 

// const isAuthenticated = true;
// console.log(isAuthenticated);
// console.log(typeof isAuthenticated);

// const isModalOpen = false;
// console.log(isModalOpen);
// console.log(typeof isModalOpen);

// const guest = null;
// console.log(guest);
// console.log(typeof guest);

// const message = "My name is";
// console.log(message);

// let name = "Polina";
// console.log(name);

// // console.log(`${message}, ${name}`);
// // alert(`${message}, ${name}`);

// const isReady = confirm("i'll make you laugh");
// console.log(isReady);

// const enterName = prompt("your name is");
// console.log(enterName);*/

// const x = 3;
// const y = 6;
// const z = 2;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y); //остаток от деления
// console.log(y**z); //степень

// //parentheses first
// console.log(x+y*z);
// console.log((x+y)*z);

// //works for degrees too
// console.log(x+y**z);
// console.log((x+y)**z);

// //experiment
// console.log(x+4);

// let value = 100;
// value = value + 33;
// console.log(value);

// value += 44; //instead of = value + 44 use += 44
// console.log(value);

// const p = 100;
// const r = 3;
// const s = 100;
// console.log("p>r", p>r);
// console.log("p<r", p<r);
// console.log("p>=s", p>=s);

// console.log(3 > 2 > 1); //false
// console.log(5>1<5); //true

// console.log(3>2==1); //== compares a type not strict
// console.log(3>2===1); //=== compares a value supa strict 

// console.log("p == r", p == r); //false
// console.log("p === r", p ===r); //false

// console.log("p == s", p == s); //true
// console.log("p === s", p ===s); //true

// //strict inequality
// console.log("p !== r", p !== r);


// const num1 = 5;
// const num2 = 18;
// const str1 = "5";
// const str2 = "18";

// console.log("num1 === str1", num1 === str1);
// console.log("num1 == str1", num1 == str1);
// console.log(1 == true);
// console.log(0 == false);

// console.log(num1+str1);
// console.log(typeof (num1+str1)); 

// console.log(str1+num1+str2);
// console.log(num1+num2+str1+str2);

// // const userAge = Number(prompt("how old are you?"));
// // console.log(userAge); 
// // console.log(typeof userAge);


// // let userInfo = prompt("put stuff");
// // console.log(userInfo); 
// // console.log(typeof userInfo);
// // userInfo = Number(userInfo);
// // console.log(userInfo); 
// // console.log(typeof userInfo);

// const val1 = "17";
// console.log(Number(val1));
// console.log(typeof Number(val1));

// const val2 = "junior js developer";
// console.log(Number(val2));
// console.log(typeof Number(val2));

// console.log(Number.parseInt("112px")); 
// console.log(Number.parseInt("11abc12"));
// console.log(Number.parseInt("1,47sdh4"));
// console.log(Number.parseInt("jfjf12"));

// console.log(Number.parseFloat("112px"));
// console.log(Number.parseFloat("11abc12"));
// console.log(Number.parseFloat("1.47sdh4"));
// console.log(Number.parseFloat("jfjf12"));

// const validNumber = Number("1024");
// console.log(validNumber);
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("hehehe");
// console.log(invalidNumber);
// console.log(Number.isNaN(invalidNumber));

// const V = 0.1 ;
// const W = 0.2 ;
// console.log(V + W);
// console.log((V*10 + W*10)/10);

// console.log(Math.floor(1.99)); //rounds off to the smaller numo
// console.log(Math.ceil(1.99)); //rounds off to bigger numo
// console.log(Math.round(1.99));
// console.log(Math.round(1.3));

// console.log(Math.max(1,3,2,0,8,-3));
// console.log(Math.min(1,3,2,0,8,-3));

// console.log(Math.pow(3,2));

// console.log(Math.random()*(10-1)+1);

// let animal = "tiger";
// console.log(animal.length);

// animal = "pink panther";
// console.log(animal.length);

// console.log(animal.indexOf("panther"));
// console.log(animal.includes("panther"));
// console.log(animal[3]);
// console.log(animal.toLocaleUpperCase());



// console.log(Boolean(0)); //false, binary code
// console.log(typeof 0);
// console.log(Boolean(NaN)); //false
// console.log(typeof NaN);
// console.log(Boolean("")); // false
// console.log(typeof "");

// console.log(Number(false)); //0

// console.log(false == undefined); // false
// console.log(false == null); // false
// console.log(null == undefined); // true //rule
// console.log(null === undefined); // false

// && logs false if at least 1 is false, only logs true if everything is

// const kpi = 30;
// const fact = kpi > 20 && kpi < 31;
// console.log(fact); // true
// console.log("cat" && "dog" && "parrot"); //parrot // last true

// const fact2 = kpi > 20 && kpi<29;
// console.log(fact2); // false
// console.log("cat" && false)//false

// const fact1 = kpi > 31 && kpi<32;
// console.log(fact1); // false
// console.log(false  &&  "cat")//false


// const age = 30;
// const trueAge = age<31 || age>29;
// console.log(trueAge) ; // || first true

// const trueAge1 = age <31 || age>32
// console.log(trueAge1) ; // true, first true 

// // || logs false only when both are false, 1 true - true

// const trueAge4 = age <29 || age>31 || age >32 ;
// console.log(trueAge4); //false

// const trueAge5 = age <29 || age>25 || age >50 ;
// console.log(trueAge5); //true 


// console.log(!true); //false 


// //priorities
// const quantity = 50;
// console.log((false && true) || true); // false||true -> true
// console.log(false && (true || true)); // false&& true -> false

// console.log((quantity > 29 && quantity < 49)||quantity>48); // false || true ->true
// console.log((true && false) || "parrot"); // parrot // false || 'true' 
// console.log((quantity > 51 && quantity < 53)||quantity>48); // true
// console.log((quantity > 51 && quantity < 51)||quantity>52);//false

// console.log((false&&true)||NaN); //NaN // false || nan


// let cost = 0;
// let subscription = "pro";

// if (subscription === "pro") {
//     cost=100;
// }
// if (subscription === "pr") {
//     cost=10;
// }
// console.log(cost);


// let day = prompt("enter todays day");
// let weekday;
// if (day === String ("Saturday") || day === String("Sunday")) {
//     weekday = "weekend";
// } else {
//     weekday = "workday";
// }
// console.log(weekday);


// let value = prompt("Boolean value");
// let bool;
// if (value === "true" || value =="false") {
//     bool = "boolean";
// } else {
//     bool = "notboolean";
// }
// console.log(bool);


// let day = prompt("what day is it today");
// let weekday;
// if (day === "Saturday"|| day ==="Sunday") {
//     weekday = "weekend";
// } else if (
//     day === "Monday" ||
//     day === "Tuesday" ||
//     day === "Wednesday" ||
//     day === "Thursday" ||
//     day === "Friday" ||
// ) {
//     weekday = "workday";
// } else {
//     weekday = "Invalid entered data";
// }
// console.log(day);
// console.log(weekday);


// let studentAge = prompt("Enter your age please");
// let group;

// if (studentAge > 11 && studentAge < 15) {
//   group = "Junior";
// } else if (studentAge > 14 && studentAge < 18) {
//   group = "Middle";
// } else {
//   group = "Your age is not valid for children group. Please apply to manager.";
// }
// console.log(studentAge);
// console.log(group);

//ternary operator

// let answer;
// let question = confirm("are you a student?");
// // if (question === true) {
// //     answer = "yes";  
// // } else {
// //     answer = "no";
// // }

// answer = question === true ? "yes" : "no";
// console.log(answer);



//switch

// let day = prompt("what day is it today");
// let weekday;

// switch (day){
//     case "Monday" :
//     weekday ="1st day of the week";
//     break;

//     case "Tuesday" :
//     weekday ="2nd day of the week";
//     break;

//     case "Wednesday" :
//     weekday ="3rd day of the week";
//     break;

//     case "Thursday" :
//     weekday ="4th day of the week";
//     break;

//     case "Friday" :
//     weekday ="5th day of the week";
//     break;

//     case "Saturday" :
//     weekday ="6th day of the week";
//     break;

//     case "Sunday" :
//     weekday ="7th day of the week";
//     break;

//     default:
//     alert("Invalid entered data");

// }

// console.log(`${day} is ${weekday}`);





// let myFirstName = "Polina";
// if (true) {
//     console.log("BLOCK scope:", myFirstName); 
// }

// console.log("GLOBAL scope:", myFirstName);


// if (true) {
// let mySecondName = "Peshkova";
//     console.log("BLOCK scope:", mySecondName); 
// }
// console.log("GLOBAL scope:", mySecondName); //uncaught, bc was let inside



// const global ="global";

// if (true) {
//     const blockA = "block A";
//     console.log(blockA);
//     console.log(global);
//     //console.log(blockB); // uncaught

//     if(true) {
//         const blockB ="block B";
//         console.log(blockA);
//         console.log(global);
//         console.log(blockB);
//     }
// }

// if (true) {
//     const blockC = "block C";
//     console.log(blockC);
//     console.log(global);
//     //console.log(blockA); // uncaught
// }


// let counter = 0;
// while (counter < 10) {
//     console.log("counter", counter);
//     counter +=1; 
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter +=1;
// }




