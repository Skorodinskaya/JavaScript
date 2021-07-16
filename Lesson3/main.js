// - створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangular(a, b) {
    return a * b;
}

let squareRectan = rectangular(15, 30);
console.log(squareRectan);

// - створити функцію яка обчислює та повертає площу кола

// function circle (a, b) {
//     return a * b **2;
// }
// let squareCircle = circle(3.14, 50);
// console.log(squareCircle);

function circle(a) {
    return Math.PI * a ** 2;
}

let squareCircle = circle(50);
console.log(squareCircle);

// - створити функцію яка обчислює та повертає площу циліндру
function cylinder(a, b) {
    return 2 * Math.PI * a * (a + b);
}

let squareCylinder = cylinder(50, 125);
console.log(squareCylinder);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let numbers = [23, 1, 97, 68, 33];
// function minElement (numbers) {
//     let min;
//     let max = numbers[0];
//     for(let i =0; i < numbers.length; i++) {
//         if((numbers[i]) < max){
//             max = numbers [i];
//         } else {
//             min = numbers [i];
//         }
//     }
//     return min;
// }
// console.log(minElement(numbers));

// ????????????????????????

// - створити функцію яка при створює блок з текстом. Текст задати через аргумент

function text(content) {
    document.write(`<div><p>${content}</p></div>`);
}
text (`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis ex id ipsa omnis, possimus quaerat
    quod tempore voluptates`)

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (listContent) {
    document.write(`<ul>
<li>${listContent}</li>
<li>${listContent}</li>
<li>${listContent}</li>
</ul>`);

}
list (`happines`);

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

