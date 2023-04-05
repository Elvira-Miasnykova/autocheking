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

