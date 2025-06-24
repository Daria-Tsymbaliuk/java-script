
// Завдання 1
const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


// Завдання 2
function countProps(obj) {
    return Object.keys(obj).length;
}
console.log("Кількість властивостей:", countProps(user));


// Завдання 3
function findBestEmployee(employees) {
    let best = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            best = name;
        }
    }

    return best;
}
const team = {
    Anna: 29,
    Boris: 35,
    Kate: 31,
};
console.log(findBestEmployee(team));

// Завдання 4
function countTotalSalary(employees) {
    let total = 0;
    for (const salary of Object.values(employees)) {
        total += salary;
    }
    return total;
}

const salaries = {
    Anna: 1000,
    Boris: 1500,
    Kate: 800,
};
console.log(countTotalSalary(salaries));

// Завдання 5
function getAllPropValues(arr, prop) {
    const values = [];

    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }

    return values;
}

const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Orange", price: 25, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
  }
  
  console.log(calculateTotalPrice(products, "Banana")); 
  console.log(calculateTotalPrice(products, "Orange")); 
  