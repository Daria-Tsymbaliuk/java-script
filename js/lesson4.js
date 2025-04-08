// Завдання 1

let firstText = prompt("Привіт, напиши щось");
let secondText = prompt("Знову привіт, напиши щось");

alert(firstText && secondText ? "Обидва поля заповнені" : "Не всі поля заповнені");



// Завдання 2

let firstNumber = parseFloat(prompt("Введіть перше число"));
let secondNumber = parseFloat(prompt("Введіть друге число:"));

let result = firstNumber + secondNumber;

alert(result > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10");



// Завдання 3

let text = "Hello world 👽";
console.log("text :" ,  text)
console.log( "includes  JavaScript ? ", text.includes("JavaScript"))
console.log(text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript");


// Завдання 4

let number = parseFloat(prompt("Введіть число:"));
alert(number > 10 && number < 20 ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20");



let firstName = prompt("Введіть ім'я:");
let email = prompt("Введіть email:");
let password = prompt("Введіть пароль:");
alert(firstName.length >= 3 && email.includes("@") && email.includes(".") && email.indexOf(".") > email.indexOf("@") && password.length >= 6 ? "✅✅Перенаправлення на іншу сторінку" : "❗❗Помилка: неправильне заповнення");


