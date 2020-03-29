
"use strict";
let total8 = 0;
let input8 = +prompt("введіть число");
while (input8){
    input8 = +prompt("введіть число");
    total8 = total8 + input8;
}

alert(`Общая сумма чисел равна ${total8}`);
