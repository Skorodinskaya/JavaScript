// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let array = [];

function index(a, b) {
    for (i = 0; i < a.length; i++) {
        array.push(a[i] + b[i])
    }
    return array
}

let returnArray = index([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(returnArray);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let abc = ['a', 'b', 'c'];
for (i = 1; i <= 3; i++) {
    abc.push(i)
}
console.log(abc);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let numbers = [1, 2, 3]
let numbers2 = numbers.reverse();
console.log(numbers2);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let mass = [1, 2, 3]
mass.push(4, 5, 6)
console.log(mass);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let mass1 = [1, 2, 3]
mass1.unshift(4, 5, 6)
console.log(mass1);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let mass2 = [1, 2, 3, 4, 5]
let mass2Item = mass2.slice(3, 6);
console.log(mass2Item);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let mass3Item = mass2.slice(0, 2)
console.log(mass3Item);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let mass4Item = mass2.slice(0, 3)
console.log(mass4Item);
let mass5Item = mass4Item.push('a', 'b', 'c')
console.log(mass4Item, mass5Item);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const number of even) {
    if (!(number % 2)) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let mass6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let mass7 = [];
// mass7.push(mass6)
// console.log(mass7);

let mass6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mass7 = [];
for (i = 0; i < mass6.length; i++) {
    mass7.push(mass6[i])
}
console.log(mass7);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let mass8 = ['a', 'b', 'c'];
let mass9 = [];
for (i = 0; i < mass8.length; i++) {
    mass9 = mass9 + mass8[i]
}
console.log(mass9);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// while (i<mass8.length) {
//     mass9 = mass9 + mass8[i]
//     i++
// }
// console.log(mass9);

let mass10 = ['a', 'b', 'c'];
let mass11 = [];
i = 0;
while (i < mass10.length) {
    mass11 = mass11 + mass10[i]
    i++
}
console.log(mass11);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let mass12 = ['a', 'b', 'c'];
let mass13 = [];
for (const mass13Element of mass12) {
    mass13 = mass13 + mass13Element
}
console.log(mass13);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let mass14 = [9, 8, 0, 4];

console.log(mass14)
massFun(mass14, 2);
console.log(mass14)

function massFun(arr, num) {
    let bufer = arr[num + 1]
    arr[num + 1] = arr[num]
    arr[num] = bufer
}

