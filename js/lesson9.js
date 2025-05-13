// Завдання 1
const logItems = function(array) {
    for (const element of array){
        console.log(array.indexOf(element) +1, '-', element)
    }
}
let fruits = ["яблуко", "груша", "слива", "персик"];
logItems(fruits);

// Завдання 2
const calculateEngravingPrice = function(message, pricePerWord) {
    let wordsArr = message.split(" ");
    // console.log(wordsArr)
    let result = wordsArr.length * pricePerWord;
    return result;
  }
  
  console.log(calculateEngravingPrice('hello world', 50));
  

// Завдання 3
const findLongestWord = function(string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  console.log(findLongestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit."))
  

// Завдання 4
const formatString = function(string)  {
    if (string.length < 40){
         return string;
    }

    else {
        return string.slice(0 , 40)  + '...';   
    }
}

console.log(formatString("Hello World!"))
console.log(formatString("Це довгий рядок , та має довжино більше ніж 40 символів"))


// Завдання 5

const checkForSpam =  function(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  console.log(checkForSpam('Get best SALE now!'));
  console.log(checkForSpam('This is a regular message')); 

// Завдання 6


const addNumber = function() {
  let numbers = [];
  let total = 0;

  while (true) {
    let input = prompt('Введіть число нижче');

    if (input === null) {
      for (const num of numbers) {
        total += num;
      }
      console.log(`Загальна сума чисел дорівнює ${total}`);
      break;
     } 
    else {
      let number = Number(input);
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        alert('Було введено не число, попробуйте ще раз');
      }
    }
  }
};

addNumber(); 
