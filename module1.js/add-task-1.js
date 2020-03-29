"use strict";

// console.log(null || -1);

//-----1-----//
alert( 1 && null && 2 ); // null
// 1 && null --> null 
// && выводит false если хоть одно значение false, и последнее true, если все true

alert( null || 2 && 3 || 4 ); //3
//null || 2 --> 2
// 2 && 3 --> 3 
// 3 || 4 --> 3
// || выведет первое true, если все true, && - последнее true


//-----2-----//

if (-1 || 0) 
alert( 'first' ); // будет выведено, так как есть хоть одно тру
if (-1 && 0) 
alert( 'second' ); // не будет выведено, так как есть хоть одно фолс
if (null || -1 && 1)
alert( 'third' ) // будет выведено, так как первое сравнение тру, так как есть хоть одно тру, второе сравнение так же тру, так как оба значения тру

//-----3-----//

const age = 67;
if (age >= 14 && age <= 90) {
    alert("your age is between 14 and 90")
}
if (!(age >= 14 && age <= 90)) {
    alert("your age is not between 14 and 90")
} 

//-----4-----//

let day = prompt("what day is it today?");
let weekday; 
if ( day === "Saturday" || day === "Sunday") {
    weekday = "weekend";
} else if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
) {
    weekday = "workday";
} else {
    weekday = "Invalid entered data";
} 
console.log(`${day} is ${weekday}`); 
