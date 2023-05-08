// ---------- task 1---------------------

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// ---------- task 2---------------------

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = 3500;

// Change code below this line

// console.log(productName);
// console.log(pricePerItem);

// ---------- task 3---------------------

// Change code below this line
// const topSpeed = 160;
// let distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// const isAdmin = false;

// ---------- task 4---------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log('totalPrice = ', pricePerItem);

// ---------- task 5---------------------

// const productName = "Droid";
// const pricePerItem = 3500;

// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// ---------- task 6---------------------

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);
// ---------- task 7---------------------

// Change code below this line
// function sayHi () {
//   console.log("Hello, this is my first function!");
// };

// sayHi();

// ---------- task 8---------------------

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ---------- task 9---------------------

// function add(a, b, c) {
 // Change code below this line

// return a + b + c;

  // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ---------- task 10---------------------

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));

// ---------- task 11 ---------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// ---------- task 12 ---------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//   // Change code above this line
//   return message;
// };

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// ---------- task 13 ---------------------

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// };

// console.log(isAdult(10));
// console.log(isAdult(25));
// console.log(isAdult(35));
// console.log(isAdult(8));

// ---------- task 14 ---------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// };

// console.log(isValidPassword('mango'));
// console.log(isValidPassword('kiwi'));
// console.log(isValidPassword('jqueryismyjam'));

// ---------- task 15 ---------------------

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(10));
// console.log(checkAge(35));

// ---------- task 16 ---------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available >= ordered) {
//     message = "Order is processed, our manager will contact you.";
//   }
//   else {
//     message = "Not enough goods in stock!";
    
//   }
//   // Change code above this line
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(100, 150));

// ---------- task 17 ---------------------

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// ---------- task 18 ---------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// };

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(3000, 5, 3000));
// console.log(makeTransaction(500, 10, 5000));

// ---------- task 19 ---------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (!password) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// };

// console.log(checkPassword("mango"));
// console.log(checkPassword(null));
// console.log(checkPassword());
// console.log(checkPassword("jqueryismyjam"));

// ---------- task 20 ---------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered === 0) {
//   message = `There are no products in the order!`;
// }
// else if (ordered > available) {
// message = `Your order is too large, there are not enough items in stock!`;
// }
// else {
// message = `The order is accepted, our manager will contact you`;
// }
//   // Change code above this line
//   return message;
// };

// console.log(checkStorage(200, 300));
// console.log(checkStorage(300, 300));
// console.log(checkStorage(500, 300));

// ---------- task 21 ---------------------

// function isNumberInRange(start, end, number) {
//   const isInRange =((number >= start) && (number <= end)); // Change this line

//   return isInRange;
// };

// ---------- task 22 ---------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ((subType === "pro") || (subType === "vip")); // Change this line

//   return canAccessContent;
// };

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// ---------- task 23 ---------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !((number >= start) && (number <= end)); // Change this line

//   return isNotInRange;
// };

// ---------- task 24 ---------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if ((totalSpent >= 20000) && (totalSpent < 50000)) {
//   discount = SILVER_DISCOUNT;
// } else if ((totalSpent >= 5000) && (totalSpent < 20000)){
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = 0;
// }
//   // Change code above this line
//   return discount;
// };

// ---------- task 25 ---------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
//   // Change code above this line
//   return message;
// };


// ---------- task 26 ---------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = (password === ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// };

// console.log(checkPassword("angular"));
// console.log(checkPassword("jqueryismyjam"));

// ---------- task 27 ---------------------

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter":// Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// };

// ---------- task 28 ---------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//     message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//       break;
//     default:
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// };

// ---------- task 29 ---------------------

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case "China" :
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile" :
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia" :
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//       case "Jamaica" :
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }

//   // Change code above this line
//   return message;
// };

// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));
// console.log(getShippingCost("Australia"));

// ---------- task 30 ---------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// };

// console.log(getNameLength("Mango"));
// console.log(getNameLength("Poly"));

// ---------- task 31 ---------------------

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line


// ---------- task 32 ---------------------

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// };

// ---------- task 33 ---------------------

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length > maxLength) {
// result = message.slice( 0, maxLength) + "...";}
// //result = result + "…";}

// else {
//   result = message;
// }

//   /// Change code above this line
//   return result;
// };

// ---------- task 34 ---------------------

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// };

// // ---------- task 35 ---------------------

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// };

// ---------- task 36 ---------------------

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toLowerCase();
//   result = result.includes("spam")|| result.includes("sale");
//   // Change code above this line
//   return result;
// };


// _____________Module2_________________________

// ---------- task 1 ---------------------

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// };

// ---------- task 2 ---------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line



//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
  

  
//   // Change code above this line
// }


// ---------- task 3 ---------------------

// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
  


//   // Change code above this line
// }



// ---------- task 4 ---------------------

// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// ---------- task 5 ---------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// Change code below this line

// ---------- task 6 ---------------------

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana"


// ---------- task 7 ---------------------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// ---------- task 8 ---------------------

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// Change code below this line

// ---------- task 9 ---------------------

// function getExtremeElements(array) {
  // Change code below this line

  //    1     
//   let newArray = []
// const firstEl = array[0];
//   console.log(firstEl)
//   newArray.push(firstEl)
// const lastElIdx = array.length -1;
// const lastEl = array[lastElIdx];
//   console.log(lastEl)
// newArray.push(lastEl);
//   return newArray;
  
  //    2     
  // let newArray = [];
  // return newArray = [array[0], array[array.length - 1]];
  // Change code above this line
// }
// console.log(getExtremeElements([1,4,56,6,7]));

// ---------- task 10 ---------------------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// };

// console.log(splitMessage("Hello world!", ""));
// console.log(splitMessage("Hello world!", " "));
// console.log(splitMessage("Hello world!", ","));

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const words = message.split(" ");
  // console.log(words);
  // const value = words.length;
  // const totalPrice = value * pricePerWord;
  // return totalPrice;

   // Change code above this line
  // ------------2--------------
//   let value =0;
//   for (let i = 1; i <= words.length - 1; i += 1) {
//      value = i + 1;
    
//   }
//   console.log(value)
//   const totalPrice = value * pricePerWord;
//   return totalPrice;

  
// };
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));






