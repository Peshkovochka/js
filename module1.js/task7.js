"use strict";

let countryInput = String(prompt("Введите название страны"));
let country = countryInput.toLowerCase();
let message7;

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

switch (country){
    case "китай" :
        message7 = `Доставка в ${country} будет стоить ${priceChina} кредитов`;
        break;
    case "чили" :
        message7 = `Доставка в ${country} будет стоить ${priceChili} кредитов`;
        break;
    case "австралия" :
        message7 = `Доставка в ${country} будет стоить ${priceAustralia} кредитов`;
        break;
    case "индия" :
        message7 = `Доставка в ${country} будет стоить ${priceIndia} кредитов`;
        break;
    case "ямайка" :
        message7 = `Доставка в ${country} будет стоить ${priceJamaica} кредитов`;
        break;
    default:
        message7 = 'В вашей стране доставка не доступна';
    
}
alert(message7);

