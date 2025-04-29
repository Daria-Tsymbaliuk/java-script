// Завдання 1
const fruits = ["яблуко", "груша", "слива", "персик"];
let result = "";
for (let i = 0; i < items.length; i++) {
    result += items[i];
    if (i < items.length - 1) {
        result += ", ";
    }
}
console.log(result);

console.log("With join", fruits.join(', '))

// Завдання 2
const styles = ['Джаз', 'Блюз', 'Класика', 'Рок-н-ролл', 'Метал'];
// Видалити
console.log(styles.indexOf('Класика'));
const removedItems = styles.splice(2, 1)
console.log(styles);
//  Додати
cards.splice(5, 0, 'Реп')
console.log(styles);
//  Оновити
cards.splice(2, 1, 'Хіп-хоп')