// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const array = []

function random(num) {
    for (let i = 0; i < 30; i++) {
        array.push(Math.floor(Math.random() * num));
    }
}

random(101);
console.log(array);

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sort = array.sort(function (a, b) {
    return a - b;
});
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// #1 // let filter = array.filter(function (value) {
// if (!(value % 2)) {
//     return value;
// }
// });
// console.log(filter);

// #2 // let filter = array.filter(function (value) {
//     return value % 2 === 0;
// });
// console.log(filter);

let filter = array.filter(function (value) {
if (value % 2 === 0) {
    return value;
}
});
console.log(filter);

// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let map = array.map (function (item) {
    return item + '';
    // return {value: item};
})
console.log(map);

// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
