"use strict";
//FUNCTIONS-----------------------------------------------------------------------------------------------------------
function logger() {
  console.log("Everything will be fine");
}

// logger();

function juicer(mango, banana) {
  console.log(mango, banana);
  const juice = `The juice with ${mango} mangoes and ${banana} bananas are ready.`;
  return juice;
}

let product = juicer(3, 5);
console.log(product);
