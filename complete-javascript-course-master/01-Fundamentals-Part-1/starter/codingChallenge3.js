let d1 = 96;
let d2 = 108;
let d3 = 89;
let k1 = 88;
let k2 = 91;
let k3 = 110;

let dAvgScore = (d1 + d2 + d3) / 3;
let kAvgScore = (k1 + k2 + k3) / 3;
let winner;
if (dAvgScore > kAvgScore && dAvgScore > 100) {
  winner = "Dolphins";
} else if (dAvgScore < kAvgScore && kAvgScore > 100) {
  winner = "Koalas";
} else if (dAvgScore == kAvgScore && dAvgScore >= 100) {
  winner = "Draw";
} else {
  winner = "No Winner";
}
