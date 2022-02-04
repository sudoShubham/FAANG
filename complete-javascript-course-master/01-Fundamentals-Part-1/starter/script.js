// let k = "amazing";
// if (k == "amazing") {
//   alert("JS is fun");
// }

// let firstName = "Shubham";
// console.log(firstName);

//**************************************************************************************************************** */
//Assignment 1
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// const country = "India";
// const continent = "Asia";
// let population = "1.1 M";
// console.log(country);
// console.log(continent);
// console.log(population);
//***************************************************************************************************************** */
//FALSY VALUES------------------------------------------------------------------------------
//undefined, 0, '' , NaN and null These 5 are falsy values.
// console.log(Boolean(""));

//Switch statement
let day = "tuesday";
switch (day) {
  case "sunday":
  case "saturday":
    console.log(`Enjoy the weekend!`);
    break;

  case "monday":
    console.log("Prepare JS Basics.");
    break;

  case "tuesday":
  case "wednesay":
    console.log("Prepare Advanse JS");
    break;

  case "thursday":
    console.log("Enjoy thursday.");
    break;

  case "friday":
    console.log("Prepare weekend");
    break;

  default:
    console.log("Not a valid day");
}
