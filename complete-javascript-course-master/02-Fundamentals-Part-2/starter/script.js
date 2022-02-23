"use strict";
//FUNCTIONS-----------------------------------------------------------------------------------------------------------
function logger() {
  console.log("Everything will be fine");
}

// logger();

/*
function juicer(mango, banana) {
  console.log(mango, banana);
  const juice = `The juice with ${mango} mangoes and ${banana} bananas are ready.`;
  return juice;
}

let product = juicer(3, 5);
console.log(product);
*/

/*           
 //Function declaration
function ageCalculator(birthYear) {          //We can call this type of functions before declaring them
  return 2022 - birthYear;
}
console.log(`Your current age is ${ageCalculator(1999)}.`);
*/

/*
//Function expression
const ageCalculator = function (birthYear) {
  return 2022 - birthYear; //We cannot call this type of functions before declaring them
};
console.log(`Your current age is ${ageCalculator(1999)}.`);
*/

/*
//Arrow Functions
const ageCalculator = (birthYear) => 2022 - birthYear;
console.log(`Your current age is ${ageCalculator(1999)}.`);
*/

/*
//Function calling another function
function cutFruits(fruits) {
  return 4 * fruits;
}

function makeJuice(orange, mango) {
  let orangePieces = cutFruits(orange);
  let mangoPieces = cutFruits(mango);
  const juice = `Juice with ${orangePieces} orange pieces and ${mangoPieces} mango pieces.`;
  return juice;
}

console.log(makeJuice(4, 2));
*/

//Coding Challenge
const calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};

const checkWinner = (avg1, avg2) => {
  if (avg1 >= 2 * avg2) {
    return "Dolphins Won";
  } else if (avg2 >= 2 * avg1) {
    return "Koalas won";
  } else {
    return "Match Draw";
  }
};

const dAvg = calcAverage(85, 54, 41);
const kAvg = calcAverage(23, 34, 27);

const res = checkWinner(dAvg, kAvg);
console.log(res);
