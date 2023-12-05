const { createDiffieHellmanGroup } = require("crypto");
const fs = require("fs");
const padawansTxt = fs.readFileSync("data/padawans.txt", "utf-8");

function getPadawanNames() {
  let padawanNames = padawansTxt.trim().split("\r\n");
  return padawanNames;
}

const scoresTxt = fs.readFileSync("data/scores.txt", "utf-8");
function getLightsaberScores() {
  let scoresValues = scoresTxt.split("\r\n").map((el) => (el = +el));
  return scoresValues;
}

function getStats() {
  let arrScores = getLightsaberScores();
  let padawanNames1 = getPadawanNames();
  let result = [];
  for (let i = 0; i < padawanNames1.length; i += 1) {
    result.push([padawanNames1[i], arrScores[i]]);
  }
  return result;
}

function writeStats() {
  let stats = getStats();
  let result = stats.map(el => el.join(' ')).join('\n');
  console.log (result);
 fs.writeFileSync ('data/stats.txt', `${result}`)
}
console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
