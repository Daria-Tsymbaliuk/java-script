// Завдання 1

let celsius = 17; 
let fahrenheit = 1.8 * celsius + 32; 
console.log(`${celsius}°C = ${fahrenheit}°F`)

// Завдання 2

let daysInMonth = 31; 
console.log("Кількість днів у цьому місяці" , daysInMonth)
const hoursInMonth = 24 * daysInMonth;
console.log("Кількість годин у цьому місяці" , hoursInMonth)
const minutesInMonth = 60 * hoursInMonth;
console.log("Кількість хвилин у цьому місяці" , minutesInMonth)

// Завдання 3


let health = 100;
health  -=  40;
console.log( "health :" , health)

let energy = 100;
energy -=  75;
console.log("energy :" , energy)


// Завдання 4

let totalPrice = 400;
console.log( "Вартість цієї покупки :" , totalPrice )

let discount = 0.1 *  totalPrice ;
console.log( "Знижка :" , discount )
 
console.log( "Вартість цієї покупки зі знижкою :" , totalPrice - discount )


// Завдання 5 

const floatNumber = 12.78; 
console.log("Округлення числа до меншого :" , Math.floor(floatNumber)); 

// Завдання 6

const floatString = "45.67" ;
console.log(Number.parseFloat("45.67"));

// Завдання 7

const intString = "123";
console.log(Number.parseInt(intString))

// Завдання 8
let number = 25; 
console.log("number with Math.sqrt :" , Math.sqrt(number)); 

// Завдання 9

const integer = 42; 
const convertedString = integer.toString(); 
console.log(convertedString)
const stringNumber = "256"; 
console.log(Number.parseInt(stringNumber))


