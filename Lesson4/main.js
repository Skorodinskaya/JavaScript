// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const array0 = []

function random0(num) {
    for (let i = 0; i < 30; i++) {
        array0.push(Math.floor(Math.random() * num));
    }
}

random0(101);
console.log(array0);
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const array = []

function random(min, max) {
    for (let i = 0; i < 30; i++) {
        array.push(Math.floor(Math.random() * (max-min) + min));
    }
}

random(10, 150);
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

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [];
let user1 = new User(1, 'Alex', 'Smith', 'smith.gmail.com', 34563);
let user2 = new User(2, 'Maria', 'Taylor', 'taylor.gmail.com', 63653);
let user3 = new User(3, 'Roberto', 'Brown', 'brown.gmail.com', 73466);
let user4 = new User(4, 'Kate', 'Orlean', 'orlean.gmail.com', 23246);
let user5 = new User(5, 'Lisa', 'Burkova', 'burkova.gmail.com', 86542);
let user6 = new User(6, 'Max', 'Color', 'color.gmail.com', 56327);
let user7 = new User(7, 'Ana', 'Yellow', 'yellow.gmail.com', 35784);
let user8 = new User(8, 'Svitlana', 'Blue', 'blue.gmail.com', 23578);
let user9 = new User(9, 'Suisy', 'Red', 'red.gmail.com', 25783);
let user10 = new User(10, 'Ira', 'Sweet', 'sweet.gmail.com', 23267);

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(users);

let user_filter = users.filter(function (user_number)
    {
      return user_number.id % 2 ===0;
    }
)
console.log(user_filter);

let user_sort = user_filter.sort((a, b) => b.id - a.id);
console.log(user_sort);
