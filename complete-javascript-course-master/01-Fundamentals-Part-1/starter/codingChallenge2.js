let markHeight = 1.69;
let johnHeight = 1.95;
let markWeight = 78;
let johnWeight = 95;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI}) !`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is lesser than Mark's BMI (${markBMI})! `
  );
}
