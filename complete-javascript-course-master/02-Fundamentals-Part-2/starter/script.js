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

/*
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
*/

//Arrays

/*
const ageCalculator = (birthYear) => 2022 - birthYear;

const friends = ["Ram", "Sham", "Gopi", "Chandu"];
const birthYears = new Array(2000, 1999, 1998, 1975);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const myData = [friends[0], 2022 - 1999, "Engineer", friends];
console.log(myData);
console.log(typeof myData);
console.log(birthYears[0]);
const age = new Array(ageCalculator(birthYears[0]));

console.log(age);
*/

//Array Methods

const friends = ["Ram", "Sham", "Gopi", "Chandu"];

/*
//Add elements
const newLength = friends.push("Shubham");
// console.table(friends);
console.log(friends);
console.log(newLength);
friends.unshift("Golu");
console.log(friends);

//Remove element
const deletedItem = friends.pop();
console.log(deletedItem);
const removeFirst = friends.shift();
console.log(removeFirst);

console.log(friends.indexOf("Gopi"));
console.log(friends.includes("Sham"));
*/

/*
//Challenge 2
const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

const bills = [125, 555, 44];
const tips = [];
const total = [];
for (let x = 0; x < bills.length; x++) {
  tips.push(calcTip(bills[x]));
}

for (let x = 0; x < bills.length; x++) {
  total[x] = bills[x] + tips[x];
}

console.log(bills);
console.log(tips);
console.log(total);
*/

//Objects
const data = {
  name: "Shubham",
  birthYear: 1999,
  job: "Performance Engineer",
  skills: ["JS", "C++", "DSA"],
  calcAge: function (year) {
    return 2022 - year;
  },
  calcAgeNew: function () {
    this.age = 2022 - this.birthYear;
    return 2022 - this.birthYear;
  },
  getSummary: function () {
    return `Hi, my name is ${this.name}, My birth year is ${
      this.birthYear
    } and I am ${this.calcAgeNew()} years old.`;
  },
};

/*
console.log(data);
console.log(data.name);
console.log(data["name"]);
console.log(data["na" + "me"]); //We can't do this in . operator

const userInput = prompt("Enter your choice: name,age,job,skills");
console.log(data.userInput); //Gives undefine output
console.log(data[userInput]); //Works good
*/
/*
data.location = "Nashik";
data["email"] = "shubhamp2017@gmail.com";
console.log(data);

console.log(data.calcAge(data.birthYear));
console.log(data["calcAge"](data.birthYear));
console.log(data.calcAgeNew());
console.log(data.getSummary());
*/

//Challege 3
const john = {
  name: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const res =
  john.calcBMI() > mark.calcBMI()
    ? `John's bmi (${john.bmi}) is greater than mark's bmi(${mark.bmi}).`
    : `John's bmi (${john.bmi}) is less than mark's bmi(${mark.bmi}).`;

console.log(res);
