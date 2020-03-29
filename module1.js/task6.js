"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let message6;
let a = Number(prompt("Сколько дроидов вы хотели бы приобрести?"));
let totalPrice = Number(a*pricePerDroid);

if (prompt === null) {
    message6='Отменено пользователем!';
} else if (totalPrice>credits){
    message6='Недостаточно средств на счету!';
} else {
    message6 = `Вы купили ${a} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}
alert(message6);







