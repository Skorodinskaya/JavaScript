// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let list = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < list.length) {
    console.log(list[i]);
    i++;
}
//     2. перебрати його циклом for
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
    // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < list.length) {
    if (list[i] % 2)
    console.log(list[i]);
    i++
}



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < list.length; i++) {
    if (list[i] % 2) {
        console.log(list[i])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < list.length) {
    if (!(list[i]%2)) {
        console.log(list[i]);
    }
    i++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < list.length; i++) {
    if (!(list[i]%2)) {
        console.log(list[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let u = 0; u < list.length; u++) {
    if (!(list[u]%3)){
        list[u] = 'okten'
        console.log(list);
    }
}
// 8. вивести масив в зворотньому порядку.
for (let i = list.length; i >= 0;  i--) {
    console.log(list[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// for (let i >= 0; i = list.length; i--) {
//     if (!(list[i]%2)) {
//         console.log(list[i]);
//     }
// }

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
let array1 = []
for (i = 0; i < 50; i++) {
if (!(i%2)) {
   array1[i] = i;
    console.log(array1[i])}
    else {
        array1[i] = i;
        console.log(array1[i]);
    }
}

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
array3 = []
for (let i = 0; i < 20; i++) {
    let matemanica = Math.round((Math.random() * 50) + 1);
    array3.push(matemanica)
}
console.log(array3);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
array4 = [];
for (i = 0; i < 20; i++) {
    let mata = Math.round((Math.random()*732)+8)
    array4.push(mata)
}
console.log(array4);
// 2. Вивести за допомогою console.log кожен третій елемен
console.log(array4[2]);
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (i = 0; i < array4.length; i+=3) {
    if (!(array4[i]%2)) {
        console.log(array4[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let array5 = []
for (i = 0; i < array4.length; i+=3) {
    if (!(array4[i]%2)) {
        array5.push(array4[i])
    }
}
console.log(array5);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array6 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (i = 0; i <array6.length; i++) {
    if (!(array6[i]%2)) {
        console.log(array6[i] + 1);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array7 = [100,250,50,168,120,345,188];
let mathe = 0;
for (i=0; i<array7.length; i++) {
    mathe = mathe + array7[i]/ array7.length;
}
console.log(mathe);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array8 = [23, 53, 2, 4, 6, 8];
let array9 = [];
for (i = 0; i<array8.length; i++) {
 array9.push(array8[i]*5)
}
console.log(array9);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let array10 = [2, true, 'ana', 4, false, 'chanel', 5];
let array11 = [];
for (i=0; i<array10.length; i++) {
    if (typeof array10[i] === `number`) {
        array11.push(array10[i])
    }
    console.log(array11);
}

// - Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
            usersWithCities.push (user)
        }
    }
}
console.log(usersWithCities);