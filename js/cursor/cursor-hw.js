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

// const countPositiveNumbers = (...numbers) => {
//   const res = numbers.filter((number) => number > 0).reduce((prev) => {
//     return prev + 1;   // (number)=> (number > 0).length
//   }, 0);
//   return res;
// };

// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, 1, -5, 10));


//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі
//елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

// const getDividedByFive = (...numbers) => {
//   const res = numbers.filter((number) => number % 5 === 0);
//   return res;
// };

// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
// замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
// розбити масив на слова за допомогою функції .split(" "), після чого масив
// необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
// можливість розширювати cписок цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
// kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

// const replaceBadWords = (string) => {
//   const splitedArray = string.split(" ");
//   //return splitedArray
//   const badWords = ["shit", "fuck"];
//   const newStr = splitedArray.map((item) => {
//     for (let i = 0; i < badWords.length; i += 1) {
//       if (item.toLowerCase().includes(badWords[i])) {
//         item = item.replaceAll(badWords[i], "*".repeat(badWords[i].length))
//       }
//     }
//     return item;
//   }
//   );

//   return newStr.join(" ");
// };

// console.log(replaceBadWords("Holy shit!"));
// console.log(replaceBadWords("It's bullshit!"));
// console.log(replaceBadWords("Are you fucking kidding?"));

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
// склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
// видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

// const divideByThree = (word) => {
//   const result = [];
//   const letters = word.toLowerCase().replace(/\s/g, "").split("");

//   for (let i = 0; i < letters.length; i += 3) {
//     const syllable = letters.slice(i, i + 3).join("");
//     if (syllable.length === 3) {
//       result.push(syllable);
//     } else {
//       result.push(letters.slice(i).join(""));
//      // break;
//     }
//   }
//   return result;
// };

// console.log(divideByThree("Commander"));
// console.log(divideByThree("live"));


// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі
// перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте
// слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam",
// "nma"]
// Приклад: generateCombinations("ol") -> ["ol", "lo"]

// const generateCombinations = (word) => {
//   if (word.length < 2) {
//     return word;
//   } else if (word.length > 10) {
//     console.log("Too much letters");
//   } else {
//     let res = [];
//     //for (let i = 0; i < word.length; i += 1) {
//       let letter = word[0];
//       console.log('letter',letter);
//       let subWord = word.substr(0, 0) + word.substr(0 + 1, word.length - 1);
//       console.log('sunword',subWord);
//       let subWordArr = generateCombinations(subWord);
//     console.log("subWordarr:", subWordArr);
//     console.log('subWordarr[0]', subWordArr[0]);
//       //for (let j = 0; j < subWordArr.length; j += 1) {
//         res.push(letter + subWordArr[0]);
//       //}
//     //}
//     return res;
//   }
// };

// console.log(generateCombinations("man"));



////////////////////task6///////////////////////////////////////////////

// const students = [{
// name: "Tanya",
// course: 3,
// subjects: {
// math: [4, 4, 3, 4],
// algorithms: [3, 3, 3, 4, 4, 4],
// data_science: [5, 5, 3, 4]
// }
// }, {
// name: "Victor",
// course: 4,
// subjects: {
// physics: [5, 5, 5, 3],
// economics: [2, 3, 3, 3, 3, 5],
// geometry: [5, 5, 2, 3, 5]
// }
// }, {
// name: "Anton",
// course: 2,
// subjects: {
// statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
// english: [5, 3],
// cosmology: [5, 5, 5, 5]
// }
// }];

// 1.
// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
// science"] - яка повертає список предметів
// для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
// замінити на пробіл

// const getSubjects = (student) => {
//   const newArrOfSubjects = [];
  
//   const arrOfSubjects = Object.keys(student.subjects);
//   for (let subject of arrOfSubjects) {
//     newArrOfSubjects.push(subject[0].toUpperCase() + subject.slice(1).replaceAll("_", " "));
//   }
//     return newArrOfSubjects;
  
  
// };

// console.log(getSubjects(students[0]));
// console.log(getSubjects(students[2]));


// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
// середню оцінку по усім предметам для переданого студента НЕ МАСИВА
// СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)

// const getAverageMark = (student) => {
//   const marks = [];
  
//   for (let subject in student.subjects) {
//       //console.log(student.subjects[subject]);
//       marks.push(...student.subjects[subject]);
//       //console.log(marks);
//     }
//   const average = getAverage(marks)
//   return Number(average.toFixed(2));
// };



// const getAverage = (numbers) => {
//   const res = numbers.reduce((prevValue, number) => {
//     const sum = prevValue + number;
//     return sum;
//   }, 0);
  
//   return res / numbers.length;
// };

// console.log(getAverageMark(students[0]));


// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
// "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
// переданому студенту (вам знадобиться функція з попереднього завдання).
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.

// const getStudentInfo = (student) => {
//   const studentInfo = {
//     course: student.course,
//     name: student.name,
//     averageMark: getAverageMark(student),
//   };
//   return studentInfo;
// };

// console.log(getStudentInfo(students[0]));


// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.

// const getStudentsNames = (students) => {
//   const array = students.map((student) => student.name).sort((a, b) => a.localeCompare(b));
//   return array;
//   };

// console.log(getStudentsNames(students));



// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
// кращого студента зі списку по показнику середньої оцінки.

// const getBestStudent = (students) => {
//   const bestAverageMarkArray = students.map(student => getAverageMark(student));
//   const bestMark = Math.max(...bestAverageMarkArray);
//   const bestMarkIndex = bestAverageMarkArray.indexOf(bestMark);
//   const x = students[bestMarkIndex].name;
//   return x;
// };

// console.log(getBestStudent(students));


// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.

// const calculateWordLetters = (word) => {
//   const obj = {};
//   for (let letter of word) {
//     obj[letter] = (obj[letter] || 0) + 1;
//     console.log(obj);
//     console.log(obj[letter]);
//   }
// };

// console.log(calculateWordLetters('test'));

// function calculateWordLetters(item) {
//   const text = item.toLowerCase().split("");
//   let result = {};
//   text.forEach(function (item) {
//     result[item] = result[item] ? result[item] + 1 : 1;
//   });
//   return result;
// }
// console.log(calculateWordLetters("test"));


////////////////////////////task7/////////////////////////////////////


// 1.
// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
// скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

// const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function getMyTaxes(salary) {
//   const number = this.tax * salary;
//   return number;
// };

// console.log(`Taxes in Ukraine: ${getMyTaxes.call(ukraine, 2500)}`);
// console.log(`Taxes in Latvia: ${getMyTaxes.call(latvia, 3500)}`);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
// скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
// middleSalary). Функція повинна викликатись через call та працювати з даними
// через this

// function getMiddleTaxes() {
//   return this.tax * this.middleSalary;
// };

// console.log(`AverageTaxes in Litva: ${ getMiddleTaxes.call(litva) }`);

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
// всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
// vacancies). Функція повинна викликатись через call та працювати з даними
// через this

// function getTotalTaxes() {
//   return this.tax * this.middleSalary * this.vacancies;
// };

// console.log(getTotalTaxes.call(litva));
// console.log(getTotalTaxes.call(ukraine));
// console.log(getTotalTaxes.call(latvia));

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
// виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
// розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval*/


// function getMySalary() {
//   const salary = Math.floor(Math.random() * ((2000 - 1500) + 1) + 1500);
//   const taxes = this.tax * salary;
//   //console.log(country.ta);
//   const profit = salary - taxes;
  
//   const res = {
//     salary,
//     taxes,
//     profit,
//   };

//   console.log(res);

// };

// let timeId = setInterval(() => getMySalary.call(latvia), 2000);
// //clearInterval(timeId)

////////////////////////////////task7//////////////////////////////////

// У цьому завданні вам необхідно створити клас Student та розробляти методи
// всередині цього класу.
// 1.
// У стдентів повинні бути наступні властивості: university, course, fullName,
// вони передаються при створенні студента(в конструктор).
// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені студента.
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4,
// 4, 5]
// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку
// студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
// this.marks -> [5, 4, 4, 5, 5]
// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього
// методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких
// помилок, просто повертається завжди null замість масиву оцінок)
// 7. Створіть метод this.recover, який дозволить поновити студента
// Advanced
// 1.
// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2. Бюджетний студент може отримати стипендію за допомогою методу
// this.getScholarship.
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви
// отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
// створення об'єкту. Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього
// вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так
// очевидно :) )

// class Student {
//   constructor({university, course, fullName, marks = []}) {
//     this.university = university;
//     this.course = course;
//     this.fullName = fullName;
//     this.studMarks = marks;
//     this.excluded = true;
//   }

//   getInfo() {
//     //return this;
//     return (
//       "Студент " +
//       this.course +
//       "го курсу " +
//       this.university +
//       ", " +
//       this.fullName
//     );

//   }
  
//   getAverageMark() {
//     const res = this.studMarks.reduce((prevValue, number) => {
//       const sum = prevValue + number;
//       return sum;
//     }, 0);
//     return res / this.studMarks.length;
//   }

//   dismiss() {
//     if (this.excluded === true) {
//       let MarksOfNull = this.studMarks;
//       MarksOfNull = null;
//       return (`Студента виключено: ${MarksOfNull}`);
//     }
//   }

//   recovery() {
//     this.excluded = false;
//     return (`Студента поновлено: ${this.studMarks}`);
//   }

//   get marks() {
//     if (this.excluded === false) {
//       return this.studMarks;
//     }
//     return null;
//   }

//   set marks(newMark) {
//     if (this.excluded === false) {
//       return this.studMarks.push(newMark);
//     }
//   }
// }

// class BudgetStudent extends Student {
//   constructor({university, fullName, marks, excluded, scholarship = 0}) {
//     super({university, fullName, marks, excluded});
//     this.scholarship = scholarship;
//     this.scholarshipInterval = setInterval(() => this.getScholarship(), 3000);
//   }

//   getScholarship() {
//   if (this.getAverageMark(this.marks) >= 4) {
//       console.log("Ви отримали 1400 грн. стипендії");
//       return this.scholarship += 1400;
//     } else
//     if ((this.getAverageMark(this.marks) < 4) || (this.dismiss(this.excluded))) {
//       console.log("студента відчислено");
//       return this.scholarship;
//     }
      
//   }
//   stopInterval() {
//     setTimeout(() => clearInterval(this.scholarshipInterval), 30000);
//   }

// }
// const budgetStud1 = new BudgetStudent({
//   university: "Вища Школа Психотерапії м.Одеса",
//   course: 1,
//   fullName: "Остап Родоманський Бендер",
//   marks: [5, 4, 4, 5],
  
// });
// console.log(budgetStud1);
// console.log(budgetStud1.getScholarship());
// budgetStud1.stopInterval();
// const student2 = new Student({
//   university: "Вищої Школи Психотерапії м.Одеса",
//   course: 1,
//   fullName: "Остап Родоманський Бендер",
//   marks: [5, 4, 4, 5],
  
// });
//console.log(student2);
//console.log(student2.getInfo());
//console.log(student2.marks);
//student2.marks = 5;
//console.log(student2.marks);
//console.log(student2.getAverageMark());
//console.log(student2.dismiss());
//console.log(student2.recovery());
///student2.marks = 5;
//console.log(student2.marks);


////////////////////////////////task8//////////////////////////////////

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


// const generateBlocks = () => {
//   const blocksEl = document.querySelector('.blocks');
//   console.log(blocksEl);
//   const arrayOfBlocks = [];
//   for (let i = 0; i < 25; i += 1) {
//     const randomBlock = document.createElement('div');
//       randomBlock.style.width = 50 + 'px';
//       randomBlock.style.height = 50 + 'px';
//       randomBlock.style.backgroundColor = getRandomHexColor();
//       randomBlock.style.display = "inline-block";
//     randomBlock.classList.add("js-block");
//     arrayOfBlocks.push(randomBlock);

//   }
//   blocksEl.append(... arrayOfBlocks);
  
// };

// const generateBlocksInterval = () => {
//   generateBlocks();
//   setInterval(() => {
//     const blocks = document.querySelectorAll(".js-block");
//     blocks.forEach(block => block.style.backgroundColor = getRandomHexColor());
//   }, 1000);
    
  
// };

// generateBlocksInterval();

/////////////////////////// 2  /////////////////////////////////////////


// const generateBlocks = () => {
//   const blocksEl = document.querySelector('.blocks');
//   blocksEl.innerHTML = "";
//   for (let i = 0; i < 25; i += 1) {
//     const randomBlock = document.createElement('div');
//       randomBlock.style.width = 50 + 'px';
//       randomBlock.style.height = 50 + 'px';
//       randomBlock.style.backgroundColor = getRandomHexColor();
//       randomBlock.style.display = "inline-block";
//     randomBlock.classList.add("js-block");
//     blocksEl.append(randomBlock);
//   }
  
  
// };

// const generateBlocksInterval = () => {
//   setInterval(() => generateBlocks(), 1000);
    
  
// };

// generateBlocksInterval();


