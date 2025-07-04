// Завдання 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

// Завдання 2

const calculate = (a, b, operation) => {
    return operation(a, b);
  };
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      return 'Помилка: ділення на нуль';
    }
    return a / b;
  };
  
  // Тестування
  console.log(calculate(10, 5, add));      // 15
  console.log(calculate(10, 5, subtract)); // 5
  console.log(calculate(10, 5, multiply)); // 50
  console.log(calculate(10, 5, divide));   // 2
  console.log(calculate(10, 0, divide));   // Помилка: ділення на нуль

// Завдання 3
function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
      console.log(messageCreator(i));
    }
  }
  
  // Тестування
  repeatMessage(3, i => `Повідомлення №${i + 1}`);
  repeatMessage(2, i => `Привіт, це ${i}`);
  repeatMessage(4, i => ` У вас ${i + 1} %`);
  