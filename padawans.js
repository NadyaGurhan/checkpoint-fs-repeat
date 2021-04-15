/** @format */

const fs = require("fs");
const data = fs.readFileSync("./data/padawans.txt", "utf-8");
const score = fs.readFileSync("./data/scores.txt", "utf-8");
// console.log(score);

function getPadawanNames() {
  let pad = [];
  let padawans = data.trim().split("\n");
  for (let i = 0; i < padawans.length; i++) {
    pad.push(padawans[i]);
  }
  return pad;
}

function getLightsaberScores() {
  let scorAr = [];
  let scores = score.trim().split("\n");
  for (let i = 0; i < scores.length; i++) {
    scorAr.push(Number(scores[i]));
  }
  return scorAr;
}

console.log(getPadawanNames());
console.log(getLightsaberScores());

function getStats() {
  let sc = [];
  let pada = data.trim().split("\n");
  let scor = score.trim().split("\n");
  for (let i = 0; i < pada.length; i++) {
    sc.push([pada[i], Number(scor[i])]);
  }
  return sc;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
