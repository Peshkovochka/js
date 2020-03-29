"use strict";

const total = 100;
let ordered = prompt("сколько единиц вы хотели бы заказать?");
let answer;
if (ordered<=total){
    answer = "Заказ оформлен, с вами свяжется менеджер";
} else {
    answer = "На складе недостаточно товаров!";
} 
console.log(answer);

