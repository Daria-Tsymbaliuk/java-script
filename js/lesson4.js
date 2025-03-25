// Завдання 1

let firstText = prompt("Привіт, напиши щось");
let secondText = prompt("Знову привіт, напиши щось");


if (firstText && secondText) {
    alert("Обидва поля заповнені");
} else {
    alert("Не всі поля заповнені");
}


// Завдання 2

let firstNumber = parseFloat(prompt("Введіть перше число"));
let secondNumber = parseFloat(prompt("Введіть друге число:"));

let result = firstNumber + secondNumber;

if (result > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}


// Завдання 3

let text = "Hello world 👽";
console.log("text :" ,  text)
console.log( "includes  JavaScript ? ", text.includes("JavaScript"))

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// Завдання 4

let number = parseFloat(prompt("Введіть число:"));

if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}



let firstName = prompt("Введіть ім'я:");
let email = prompt("Введіть email:");
let password = prompt("Введіть пароль:");

if ( firstName.length >= 3 && email.includes("@") && email.includes(".", email.indexOf("@")) && password.length >= 6) {
    alert("✅✅Перенаправлення на іншу сторінку");
} else {
    alert("❗❗Помилка: неправильне заповнення");
}