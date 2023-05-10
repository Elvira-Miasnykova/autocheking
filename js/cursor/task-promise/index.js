// Створіть функцію, яка повертає проміс
// getRandomChinese(length). Функція працює таким чином:
// Запускається цикл (підказка: можна використовувати while) length
// раз, кожен прохід циклу дивимось на останні 5 цифр результату
// виклику методу Date.now()
// Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок
// String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок
// довжиною (length) з китайськими ієрогліфами.
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻
// 簽紙" за 200ms

const getRandomChinese = (length) => {
    let result = "";
    let delay = length * 50;
    return new Promise((resolve) => {
        setTimeout(() => {
            while (length > 0) {
                const date = Date.now();
                const stringifiedDate = date.toString();
                const sign = stringifiedDate.substring(stringifiedDate.length - 5);
                //console.log(sign);
                const chineseSign = String.fromCharCode(sign);
                //console.log(chineseSign);
                result += chineseSign;
                //console.log(result);
                length --;
            }
            resolve(`String of chinese signs: ${result}`);
        }, delay)
        
    })
};

getRandomChinese(4).then(res => console.log(res));