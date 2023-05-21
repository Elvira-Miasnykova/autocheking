// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів.
// Повинен працювати наступним чином:
// const idGenerator = createIdGenerator();
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3

function* createIdGenerator() {
    for (let i = 1; i < Infinity; i += 1) {
        yield i;
    }

};

const idGenerator = createIdGenerator();
// for (value of idGenerator) {
//     console.log(value);
// }
// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value); 
// console.log(idGenerator.next().value);

// Завдання 2 (advanced)
// Створіть генератор, який буде регулювати розміри шрифту для
// вашого сайту.
// (Можна допрацювати, щоб реально змінював шрифт, але це не є
// обов'язковою умовою)
// Працювати генератор буде наступним чином:
// const fontGenerator = newFontGenerator(14); // 14 –
// стартове значення

function* newFontGenerator(initialFontSize) {
    let fzValue = initialFontSize;
    for (let i = 0; i <= 100; i += 1) {
        const toggledValue = yield;
        console.log(toggledValue);
    
        if (toggledValue === "up") {
            fzValue += 2;
        }
        else if (toggledValue === "down") {
            fzValue -= 2;
        } 
        yield fzValue
            ;
    }
}
const fontGenerator = newFontGenerator(14);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next().value);