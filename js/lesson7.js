
// Завдання 1
const numbersList = [ 1 , 2 , 35 , 4 ]; 
numbersList[1] = 10;
console.log( "Завдання 1 :" , numbersList )

// Завдання 2
const animals = [ 'dog' , 'cat' , 'horse']; 
animals[3] ='parrot';
console.log( "Завдання 2 :" , animals )



// Завдання 3
const numbers = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i +=1) {
    sum += numbers[i]; 
}
console.log("The sum is:", sum); 

// Завдання 4
let numbersBox = [3, 7, 12, 5, 9];
for (let i = 0; i < numbers.length; i +=1) {
    console.log("Завдання 4 :" , numbersBox[i]);
}

// Завдання 5
const names = [ "Оля" , "Тома" , "Анатолій", "Вікторія"  , " Міша" ];

for (let i = 0; i < names.length; i += 1){
     if (names[i].length > 5) {
       console.log(`Iмена які мають більше 5 симболів : ${names[i]}`) 
     }
}

// Завдання 6
const setNumbers = [1 , 5 , 6 , 7 , 90 , 50 , 60 , 12 , 34 , 3]; 
let maxNumber = setNumbers[0]; 

for (let i=0; i < setNumbers.length; i+= 1) { 
 if(setNumbers[i] > maxNumber) {
   maxNumber = setNumbers[i] 
} 
} 
console.log("Maxnumber is :" , maxNumber)



// Завдання 7

const numbersThumb = [1, 4, 7, 8, 10, 13, 16, 19, 20, 22];

for (let i = 0; i < numbersThumb.length; i += 1) {
    if (numbersThumb[i] % 2 !== 0) {
        continue; 
    }
    console.log("Завдання 7:", numbersThumb[i]); 
}

