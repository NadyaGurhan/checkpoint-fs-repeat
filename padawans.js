const fs = require("fs");

function getPadawanNames() {
  let data = fs.readFileSync("./data/padawans.txt", "utf8");
  data = data.trim().split("\n");
  return data;
}

let names = getPadawanNames();

function getLightsaberScores() {
  let data = fs.readFileSync("./data/scores.txt", "utf8");
  data = data
    .trim()
    .split("\n")
    .map((el) => Number(el));
  return data;
}

let scores = getLightsaberScores();

function getStats() {
  let arr = [];
  let arrNew = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(names[i], scores[i]);
  }
  for (let i = 0; i < arr.length; i += 2) {
    arrNew.push(arr.slice(i, i + 2));
  }
  return arrNew;
}
let stats = getStats();

function writeStats() {
  fs.writeFileSync("./data/stats.txt", `${stats}`);
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
