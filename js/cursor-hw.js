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

// function getRandomPassword(length = 7) {
//   let password = '';
//   let characters = '0123456789';
//   let passwordLength = characters.length;

//   for (let i = 0; i < length; i += 1) {
//     password += characters.charAt(Math.floor(Math.random() * passwordLength));

//   }
//   return password;
// };

// console.log(getRandomPassword(3));
// console.log(getRandomPassword());
// console.log(getRandomPassword(10));

// 10. Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

// function deteleLetters(letter, string) {
//   return string.split(letter).join("");
// };

// console.log(deteleLetters("a", "blablabla"));

// 11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true

// function isPalyndrom(string) {
//   const cleanString = string.toLowerCase().replaceAll(" ", "");
//   const reversed = cleanString.split("").reverse().join("");
//   return reversed;
// };

//console.log(isPalyndrom("Я несу гусеня"));
// 12. Створіть функцію, яка видалить з речення букви, які
// зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
// "сктдеим"

// function deleteDuplicateLetter(string) {
//   let strOfDuplicate = '';
//   const letters = string.trim().toLowerCase();
//   for (let i = 0; i < letters.length; i += 1) {
//     let letterCheck = letters[i];
//     if (letters.indexOf(letterCheck) === letters.lastIndexOf(letterCheck)) {
//       //console.log('indexof', letters.indexOf(letterCheck));
//       //console.log('lastindexof', letters.lastIndexOf(letterCheck));
//       strOfDuplicate += letterCheck;
//     }
//   }
//   return strOfDuplicate;
// };

// console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));



//////////////Task4///////////////////////////////////////////////


//1.Розділіть студентів на пари(хлопець + дівчина) для работи над
//проєктом. У вас повинен вийти вкладений масив з парами студентів:
//[["Олександр", "Олена"], [..], [...]];

// const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
// "Світлана"];
// const themes = ["Диференційне рівняння", "Теорія автоматів",
//   "Алгоритми і структури даних"];
// const marks = [4, 5, 5, 3, 4, 5];

// const getPairs = (studs) => {
//   const femaleStudents = [];
//   const maleStudents = [];
//   const pairArr = [];

//   for (let i = 0; i < studs.length; i += 1) {
//     if (studs[i].endsWith("а")) {
//       femaleStudents.push(studs[i]);
//       //return femaleStudents;
//     } else {
//       maleStudents.push(studs[i]);
//       //return maleStudents;
//     }
    
//   };

//   for (let i = 0; i < maleStudents.length; i += 1) {
//     pairArr.push([maleStudents[i], femaleStudents[i]]);
    
//   };
//   return pairArr;

// }

// const pairs = getPairs(students);
// //console.log(pairs);

// //2. Зіставте пари з попереднього завдання та теми проєктів, над
// //якими студенти будуть працювати.
// //Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія
// //автоматів"], [...], [...]]


// const createPairsWithTopic = (pairs, topic) => {
//   const pairsWithTopicArr = [];

//   for (let i = 0; i < pairs.length; i += 1) {
//     pairsWithTopicArr.push([pairs[i].join(" і "), topic[i]]);
//   };
  
//   return pairsWithTopicArr;
// };

// const pairWithTopic = createPairsWithTopic(pairs, themes);
// //console.log(pairWithTopic);

// //3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
// //[...]]

// const assignMark = (studs, mark) => {
//   const studentMarksArr = [];

//   for (let i = 0; i < studs.length; i += 1) {
//     studentMarksArr.push([studs[i], mark[i]]);
//   };

//   return studentMarksArr;
// };

// const assingedMark = assignMark(students, marks);
// console.log(assingedMark);

// //4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут
// //функція буде не чистою, але не повинна мутувати массив):
// //[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

// const assignRandomMarkToPair = (pairs) => {
//   const pairMarkArr = [];

//   for (let i = 0; i < pairs.length; i += 1) {
//     pairMarkArr.push([...pairs[i], (Math.floor(Math.random() * 5) + 1) ]);
//   };
//   console.log('pairs', pairs);
//   return pairMarkArr;
// };

// const assignedRandomMarkToPair = assignRandomMarkToPair(pairs);
// console.log(assignedRandomMarkToPair);

//////////////Task5///////////////////////////////////////////////

//1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив
//випадкових цілих чисел. У функції є параметри: length - довжина масиву, min –
//мінімальне значення цілого числа, max – максимальне значення цілого числа.
//Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

// const getRandomArray = (length, min, max) => {
//   console.log(length, min, max);
//   const newArray = [];
//   for (let i = 0; i < length; i += 1) {
//     newArray.push(parseInt(Math.random() * ((max - min) + min)));
//   }
//   return newArray;
// };

// console.log(getRandomArray(15, 1, 100));

//2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
//в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
//всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад:
//getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4


// const getAverage = (...numbers) => {
//   const integerNumbers = numbers.filter(number => Number.isInteger(number));
//   const res = integerNumbers.reduce((prevValue, number) => {
//     const sum = prevValue + number;
//     return sum;
//   }, 0);
  
//   return res / integerNumbers.length;
// };


// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 23.2322));

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
//в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
//Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –>3

// const getMedian = (...numbers) => {
//   //console.log(numbers);
//   const sortArr = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
//   //console.log(sortArr);
//   const halfOfArray = sortArr.length / 2;
//   return (sortArr.length % 2 === 0)
//     ? (sortArr[halfOfArray] + sortArr[halfOfArray -1]) / 2
//     : sortArr[Math.floor(halfOfArray)]
// };

// console.log("Median =", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log("Median =", getMedian(1, 2, 3, 4));
// console.log("Median =", getMedian(1, 2, 3, 4, 5, 6.2322));

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
//передані як аргументи функції.
//Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

// const filterEvenNumbers = (...numbers) => {
//   const filteredNumbers = numbers.filter((number) => number % 2 !== 0);
//   return filteredNumbers;
// };

// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

