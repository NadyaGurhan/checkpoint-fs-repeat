const fs = require("fs");
const path = require("path");

const dataFolderPath = path.join(__dirname, "data");

const fileOne = fs.readFileSync(
  path.join(dataFolderPath, "padawans.txt"),
  "utf8"
);
const fileTow = fs.readFileSync(
  path.join(dataFolderPath, "scores.txt"),
  "utf8"
);
let names;
function getPadawanNames() {
  names = fileOne.split("\n").slice(0, -1);
  return names;
}
console.log(getPadawanNames());
let score;
function getLightsaberScores() {
  score = fileTow.split("\n");
  return score.map((ele) => +ele);
}
console.log(getLightsaberScores());

function getStats() {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], score[i]]); // не успел приобразовать score
  }
  return arr;
}

console.log(getStats());

function writeStats() {}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
