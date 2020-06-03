"use strict";

//task1

const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
};
  
user.mood = "happy";
user.hobby = "coding";
user.premium = false;

const toShowUpdatedUser = function (obj) {
    console.log(obj); //{name: "Semen", age: 15, hobby: "coding", premium: false, mood: "happy"}age: 15hobby: "coding"mood: "happy"name: "Semen"premium: false__proto__: Object

    const updatedUser = Object.keys(obj);

    console.log(updatedUser); //["name", "age", "hobby", "premium", "mood"]
    for (let key of updatedUser){
        console.log(`${key} : ${obj[key]}`);
    }
};

toShowUpdatedUser(user); //name : Semen
//age : 15
//hobby : coding
//premium : false
//mood : happy


//task2

const countProps = function(obj){
   return Object.keys(obj).length;
};

console.log(countProps({}));//0
console.log(countProps({ name: "Mango", age: 2 }));//2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));//3


//task3
const countTotalSalary = function (employees) {
    let salaries = Object.values(employees);
    let totalSalary = 0;
    for (let salary of salaries) {
        totalSalary += salary;
    };
    return totalSalary;
};

console.log(countTotalSalary({})); //0

console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
); //330

console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
); //400

//task4

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName){
    let totalPrice;
    for (let i = 0; i <= allProducts.length; i+=1){
        let allValues = Object.values(allProducts[i]);
        if (allValues[0] == productName) {
            totalPrice = allValues[1] * allValues[2];
            return totalPrice;
        }
    }
};

console.log(calculateTotalPrice(products, "Радар")); //5200
console.log(calculateTotalPrice(products, "Дроид")); //2800



  