// Основы работы с пользовательскими функциями в JavaScript

// 1. Сделайте функцию, выводящую на экран ваше имя.
function printName() {
    console.log("Мое имя");
    }

    printName();


// 2. Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

function printSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
    sum += i;
    }
    console.log(sum);
    }

    printSum();

// 3. Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

function printCube(num) {
    console.log(num**3);
    }

    printCube(5);

// 4. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

function printSign(num) {
    if (num > 0) {
    console.log("+++");
    } else if (num < 0) {
    console.log("---");
    }
    }

    printSign(5);
    printSign(-5);

// 5. Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

function printSum(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    console.log(sum);
    }

    printSum(1, 2, 3);

// 6. Сделайте функцию func, которая параметром будет принимать 3 переменных и выводить на экран сумму их значений. Пусть даны 3 переменные с числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

function printSumOfVariables(param1, param2, param3) {
    let sum = param1 + param2 + param3;
    console.log(sum);
    }

    let param1 = 1;
    let param2 = 2;
    let param3 = 3;

    printSumOfVariables(param1, param2, param3);


// 7. Дана функция:
// function func(num = 5) {
// alert(num * num);
// }

// Эта функция вызывается следующим образом:
// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

При вызове func(2) будет выведено 4, так как 2 * 2 = 4.
При вызове func(3) будет выведено 9, так как 3 * 3 = 9.
При вызове func() будет выведено 25, так как num по умолчанию равен 5, и 5 * 5 = 25.


// 8. Дана функция:
// function func(num1 = 0, num2 = 0) {
// alert(num1 + num2);
// }

// Эта функция вызывается следующим образом:
// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

При вызове func(2, 3) будет выведено 5, так как 2 + 3 = 5.
При вызове func(3) будет выведено 3, так как num2 по умолчанию равен 0, и 3 + 0 = 3.
При вызове func() будет выведено 0, так как num1 и num2 по умолчанию равны 0, и 0 + 0 = 0.

// 9. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

function cube(num) {
    return num**3;
    }

    let result = cube(3);
    console.log(result);

// 10. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

function squareRoot(num) {
    return Math.sqrt(num);
    }

    let result = squareRoot(3) + squareRoot(4);
    console.log(result);

// 11. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// function sqrt(num) {
// return Math.sqrt(num);
// }

// function round(num) {
// return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.


let num = 2;
let squareRootNum = squareRoot(num);
let roundedNum = round(squareRootNum);
console.log(roundedNum);


// 12. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// function sqrt(num) {
// return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

let num1 = 2;
let num2 = 3;
let num3 = 4;
let squareRootSum = squareRoot(num1) + squareRoot(num2) + squareRoot(num3);
console.log(squareRootSum);


// 13. Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// function round(num) {
// return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.


let num1 = 2;
let num2 = 3;
let num3 = 4;
let result = round(squareRoot(num1) + squareRoot(num2) + squareRoot(num3));
console.log(result);


// 14. Что выведется на экран в результате выполнения следующего кода:
// function func(num) {
// return num;

// let result = num * num;
// return result;
// }

// alert( func(3) );
// Объясните почему.

Функция func() возвращает значение переменной num и на этой строке код функции заканчивается. Далее идет строка, которая никогда не будет выполнена.

В результате будет выведено число 3, так как функция func() возвращает переданное ей значение num.



// 15. Что выведет каждый из алертов в результате выполнения следующего кода:
// function func(num) {
// if (num <= 0) {
// return Math.abs(num);
// } else {
// return num * num;
// }
// }

// alert( func(10) );
// alert( func(-5) );
// Объясните почему.

В первом вызове функции, значение num равно 10, и выполняется ветвь else. Результатом будет число 100.

Во втором вызове функции, значение num равно -5, и выполняется ветвь if. Результатом будет число 5, так как используется функция Math.abs().


// 16. Что выведет каждый из алертов в результате выполнения следующего кода:
// function func(num) {
// if (num <= 0) {
// return Math.abs(num);
// }

// return num * num;
// }

// alert( func(10) );
// alert( func(-5) );
// Объясните почему.

В первом вызове функции, значение num равно 10, и выполняется ветвь if. Но так как после ветви if нет оператора return, выполнение продолжается дальше, и возвращается результат num * num, то есть число 100.

Во втором вызове функции, значение num равно -5, и выполняется ветвь if, возвращается число 5, так как используется функция Math.abs().


// 17. Что выведется на экран в результате выполнения следующего кода:
// function func(num) {
// let sum = 0;

// for (let i = 1; i <= num; i++) {
// sum += i;
// return sum;
// }
// }

// alert( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

В функции есть ошибка, связанная с неправильным размещением оператора return внутри цикла. В результате выполнения кода будет выведено число 1, так как цикл будет выполнен только один раз.

Для исправления ошибки, оператор return должен быть вынесен за пределы цикла:

function func(num) {
let sum = 0;
for (let i = 1; i <= num; i++) {
sum += i;
}
return sum;
}

alert(func(5));

Теперь результатом выполнения будет число 15, так как будет выполнено сложение всех чисел от 1 до 5.

// 18*. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function divideByTwo(num) {
    let count = 0;
    while (num >= 10) {
    num /= 2;
    count++;
    }
    return count;
    }

    let iterations = divideByTwo(100);
    console.log(iterations);

// 19*. Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function allEven(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
    return false;
    }
    }
    return true;
    }

    let arr = [2, 4, 6, 8];
    console.log(allEven(arr));

// 20*. Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function allOddDigits(num) {
    let digits = num.toString().split("");
    for (let i = 0; i < digits.length; i++) {
    if (parseInt(digits[i]) % 2 === 0) {
    return false;
    }
    }
    return true;
    }

    console.log(allOddDigits(1357));

// 21*. Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function hasDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
    return true;
    }
    }
    return false;
    }

    let arr = [1, 2, 3, 3, 4, 5];
    console.log(hasDuplicates(arr));
