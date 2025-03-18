
// Завдання 1

let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// Завдання 2

let email = "dasha14072011@gmail.com";
console.log("Показує чи містить email символ @ " , email.includes("@"))
console.log("Показує загальну кількість символів в email" , email.length)

// Завдання 3

let word1 = "My ";
let word2 = "name ";
let word3 = "is ";
let fullName = word1  + word2 +  word3;
fullName+="Viktor";
console.log(fullName);

// Завдання 4

const userName = "Bobik";
let payment = 14;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
// alert("Дякуємо, " + userName + "!" + " До сплати " + payment + "гривень" );
