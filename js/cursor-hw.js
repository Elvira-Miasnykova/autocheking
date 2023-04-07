// --------------------------------task1----------------------------------------

// const priceX = 15.678;
// const priceY = 123.965;
// const priceZ = 90.2345;

// console.log('priceX =', priceX);
// console.log('priceY =', priceY);
// console.log('priceZ =', priceZ);

// const maxValue = Math.max(priceX, priceY, priceZ);
// console.log('maxValue', maxValue);

// const minValue = Math.min(priceX, priceY, priceZ);
// console.log('minValue', minValue);

// const totalPrice = priceX + priceY + priceZ;
// console.log(totalPrice);

// const fixedPriceX = Number(Math.floor(priceX).toFixed());
// console.log('fixedPriceX =', fixedPriceX);

// const fixedPriceY = Number(Math.floor(priceY).toFixed());
// console.log('fixedPriceY =', fixedPriceY);

// const fixedPriceZ = Number(Math.floor(priceZ).toFixed());
// console.log('fixedPriceZ =', fixedPriceZ);

// const fixedTotalPrice = fixedPriceX + fixedPriceY + fixedPriceZ;
// console.log('fixedTotalPrice', fixedTotalPrice);

// const roundUpperTotalPrice = Math.ceil(fixedTotalPrice / 100) * 100;
// console.log('roundUpperTotalPrice = ', roundUpperTotalPrice);

// const roundLowerTotalPrice = Math.floor(fixedTotalPrice);
// console.log('roundLowerTotalPrice = ', roundLowerTotalPrice);

// function checkOddNumber(number) {
//   if (number % 2 === 0) {
//   return true
// }
// return false;
// };

// console.log(checkOddNumber(roundLowerTotalPrice));

// let clientCredits = null;
// let clientChange = null;
// if (clientCredits = 500) {
//   clientChange = clientCredits - totalPrice;
// };
// console.log('clientChange =', clientChange);

// const averagedPrice = (totalPrice / 3).toFixed(2);
// console.log('averegedPrice =', averagedPrice);


// //////////////////////////////////////////////////
// function incomeCounter(credits) {
//   const discount = Math.random();
//   console.log(discount);
  
//   const totalPayment = (totalPrice - (totalPrice * discount)).toFixed(2);
//   console.log(totalPayment);
//   const cleanIncome = (totalPrice / 2) - (totalPrice * discount);
//   console.log(cleanIncome);
//   return totalPayment;
// };

// console.log(incomeCounter(500));



// --------------------------------task2----------------------------------------

// function sumCounter(N, M, isNumberEven) {

//   // const N = parseInt(prompt("Please input number N randomly"));
//   // const M = parseInt(prompt("Please input number M randomly"));
//   // const isNumberEven = confirm("Skip even numbers (true/false)?");
//   let sum = 0;
  
//   // console.log("N =", N);
//   // console.log("M =", M);
//   // console.log(isNumberEven);

//   for (let i = N; i <= M; i = i + 1) {
//     if ((isNumberEven) && ((i % 2) !== 0)) {
//        sum = sum + i;
    
//     } else if (!isNumberEven) {
//        sum = sum + i;
//     }
  
//   }
//   return  sum;
// };

// console.log("sum =",(sumCounter(1, 10, false)));
// console.log("sum =",(sumCounter(1, 10, true)));
// console.log("sum =",(sumCounter(10, 100, false)));

// ------------------------task3--------------------------

// 1.
// Створити функцію getMaxDigit(number) – яка отримує будь-яке
// число та виводить найбільшу цифру в цьому числі.
  // Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

// function getMaxDigit(number) {
//   let maxDigit = 0;
//   let digit = number % 10;
//   while (number > 0) {
//     if (digit > maxDigit) {
//       return maxDigit = digit;
//     }
//     number = parseInt(number / 10);
//   };
// };

// console.log(getMaxDigit(125));
// console.log(getMaxDigit(125588));

//2. Створити функцію, яка визначає ступінь числа. Не
//використовуючи Math.pow та **.Використовуйте цикл

// function getPowNumber(number, pow) {
//   let res = 1;
//   for (let i = 1; i <= pow; i += 1) {
//     res *= number;
//   }
//   return res;
// };

// console.log(getPowNumber(5, 3));

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
//"Влад", "вЛАД" -> "Влад" і так далі);

// function getFormattedName(string) {
//   const newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//   return newString;
// };

//console.log(getFormattedName("оЛьГА"));

//4. Створити функцію, яка
//вираховує суму, що залишається після оплати податку від
//зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 ->805

// function totalSalary(salary) {
//   const totalSalary = salary - (salary * 0.195);
//   return totalSalary;
// };

// console.log(totalSalary(1000));

//5. Створити функцію, яка повертає випадкове ціле число в
//діапазоні від N до M.
//Приклад: getRandomNumber(1, 10) -> 5

// function getRandomInt(n, m) {
//   return Math.floor(Math.random() * (m - n + 1) + n);
// };

// console.log(getRandomInt(8, 10));

//6. Створити функцію, яка рахує скільки разів певна буква
//повторюється в слові.
//Приклад: countLetter("а", "Асталавіста") -> 4

//function letterCounter(letter, string) {
  //  let counter = 0;
  // for (let i = 0; i < string.length; i++) {
  //   if (letter.toLowerCase() === string[i].toLowerCase()) {
  //     counter = counter + 1;
  //   }
  // }
  // return counter;

  // //console.log(string.split(letter).length);
  
//}

//console.log(letterCounter("а", "Асталавіста"));
//console.log(letterCounter("і", "Асталавіста"));

//7. Створіть функцію, яка конвертує долари в гривні та навпаки в
//залежності від наявності символа $ або UAH в рядку.
//Приклад: convertCurrency("100$") -> 2500 грн. або
//convertCurrency("2500UAH") -> 100$

// function convertCurrency(string) {
//   let amount = parseFloat(string);
//   let exchangeRate = 25;

//   if (string.includes("$")) {
//     amount *= exchangeRate;
//     return amount.toFixed() + "грн";
//   } else
//     if (string.includes("UAH")) {
//       amount /= exchangeRate;
//       return amount.toFixed() + "$"
//     } else {
//       return ("Error: unknown currency");
//     }
    
// };

// console.log(convertCurrency("100$"));
// console.log(convertCurrency("2035.90UAH"));
// console.log(convertCurrency("125.35RUB"));

// 8. Врахуйте, інші валюти не конвертуються, потрібно виводити
// помилку, і також регістр uah не має значення.


// 9. Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8
// символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
// 87240124






