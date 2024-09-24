const fs = require("fs");

const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");

function getPadawanNames() {
  const names = padawans.split("\n").slice(0, -1);
  return names;
}
const nameList = getPadawanNames();
// console.log(getPadawanNames());

const scores = fs.readFileSync("./data/scores.txt", "utf-8");

function getLightsaberScores() {
  const sc = scores.split("\n").map((item) => Number(item));
  return sc;
}

const scList = getLightsaberScores();
// console.log(getLightsaberScores())

console.log(nameList);
console.log(scList);

function getStats() {
  const newArr = [];
  for (let i = 0; i < nameList.length; i++) {
    const arr2 = [];
    arr2.push(nameList[i], scList[i]);
    newArr.push(arr2);
  }

  return newArr;
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
