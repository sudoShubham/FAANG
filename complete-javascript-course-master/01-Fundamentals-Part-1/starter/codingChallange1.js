let markHeight = 1.69;
let johnHeight = 1.95;
let markWeight = 78;
let johnWeight = 95;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
