
// Завдання 1
const bankAccount = {
    ownerName: "Бобік Петренко",
    accountNumber: "UA1234567890",
    balance: 1000,
  
    deposit: function () {
      const shouldDeposit = confirm("Хочете поповнити рахунок?");
      if (shouldDeposit) {
        const amountStr = prompt("Введіть суму для поповнення:");
        const amount = parseFloat(amountStr);
  
        if (!isNaN(amount) && amount > 0) {
          this.balance += amount;
          alert(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
        } else {
          alert("Помилка: некоректна сума.");
        }
      }
    },
  
    withdraw: function () {
      const shouldWithdraw = confirm("Хочете зняти гроші з рахунку?");
      if (shouldWithdraw) {
        const amountStr = prompt("Введіть суму для зняття:");
        const amount = parseFloat(amountStr);
  
        if (!isNaN(amount) && amount > 0) {
          if (amount <= this.balance) {
            this.balance -= amount;
            alert(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
          } else {
            alert("Помилка: недостатньо коштів на рахунку.❗❗");
          }
        } else {
          alert("Помилка: некоректна сума. - Помилка ❗❗❗");
        }
      }
    }
  };
  
  bankAccount.deposit();
  bankAccount.withdraw();
  
// Завдання 2
  const weather = {
    temperature: null,
    humidity: 60,
    windSpeed: 10,
  
    isFreezing() {
      this.temperature = parseFloat(prompt("Введіть температуру:"));
      if (isNaN(this.temperature)) {
        alert("Некоректне значення температури.");
        return;
      }
  
      if (this.temperature < 0) {
        alert("Температура нижче 0 градусів Цельсія");
        return true;
      } else {
        alert("Температура вище або дорівнює 0 градусів Цельсія");
        return false;
      }
    }
  };
  
   weather.isFreezing();

// Завдання 3
const user = {
    name: "Bob",
    email: "bob@54321.com",
    password: "12345",
  
    login() {
      const enteredEmail = prompt("Введіть email:");
      const enteredPassword = prompt("Введіть пароль:");
  
      if (enteredEmail === this.email && enteredPassword === this.password) {
        alert("Вхід успішний!");
      } else {
        alert("Невірний email або пароль.");
      }
    }
  };
  
  user.login();

// Завдання 4
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  
    isHighlyRated() {
      return this.rating > 8;
    }
  };
  
  console.log("Назва:", movie.title);
  console.log("Режисер:", movie.director);
  console.log("Рік:", movie.year);
  console.log("Рейтинг:", movie.rating);
  console.log("Фільм має високий рейтинг?", movie.isHighlyRated());