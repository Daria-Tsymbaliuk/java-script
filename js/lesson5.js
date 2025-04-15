// Завдання 1
let drink = prompt("Привіт, обери каву, чай або сік та напиши те, що ти обрав");

if (drink) {  
    drink = drink.toLowerCase();
    switch (drink) {
        case 'кава':
            alert('Ви обрали каву');
            break;

        case 'чай':
            alert('Ви обрали чай');
            break;

        case 'сік':
            alert('Ви обрали сікк');
            break;

        default: 
            alert("Це не кава, і не чай, і не сік. Можливо, ви зробили помилку :(");
            break;
    }
} else {
    alert("Будь ласка, введіть вибір!");
}


// Завдання 2
let day = prompt("Введіть день тижня (наприклад, понеділок):").toLowerCase();

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "пʼятниця":
        alert("Це робочий день.");
        break;
    case "субота":
    case "неділя":
        alert("Це вихідний.");
        break;
    default:
        alert("Введено некоректний день тижня.");
}

// Завдання 3
let month = parseInt(prompt("Введіть номер місяця (1-12):"));

switch (month) {
    case 12:
    case 1:
    case 2:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Літо");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осінь");
        break;
    default:
        alert("Некоректний номер місяця");
}

// Завдання 4
let color = prompt("Введіть колір (червоний, жовтий  або зелений):").toLowerCase();

switch (color) {
    case "червоний":
        alert("стоп");
        break;
    case "жовтий":
        alert("чекай");
        break;
    case "зелений":
        alert("йди");
        break;
    default:
        alert("Це не червоний, жовтий і не зелений");
}

// Завдання 5
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let sign = prompt("Введіть знак операції (+, -, *, /):");

let result;

switch (sign) {
    case "+":
        result = num1 + num2;
        alert("Результат: " + result);
        break;
    case "-":
        result = num1 - num2;
        alert("Результат: " + result);
        break;
    case "*":
        result = num1 * num2;
        alert("Результат: " + result);
        break;
    case "/":
        if (num2 === 0) {
            alert("Помилка: ділення на нуль :(");
        } else {
            result = num1 / num2;
            alert("Результат: " + result);
        }
        break;
    default:
        alert("Невірний знак операції або невірне число :(");
}
