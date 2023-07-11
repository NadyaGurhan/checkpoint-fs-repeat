const fs = require("fs");

const padawan = fs.readFileSync("./data/padawans.txt");
const scores = fs.readFileSync("./data/scores.txt");

function getPadawanNames(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(padawan[i]);
  }
  return result;
}

console.log(getPadawanNames(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']))

function getLightsaberScores(txt) {
  const num = "";
  for (let i = 0; i < txt.length; i++) {
    num.push(scores[i]);
  }
  return num;
}

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
