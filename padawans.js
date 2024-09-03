const { log } = require('console');
const fs = require('fs')


function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf-8");
  const result = names.split('\n')
  result.pop()
  return result;
}

function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt", "utf-8");
  const result = scores.split('\n').map(Number);
  return result;
};

function getStats() {
  const names = getPadawanNames();
  const number = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], number[i]]);
  }
  return result;
};

function writeStats() {
  const result = getStats().map((el) => el.join(" ")).join("\n");
  fs.writeFileSync("./data/stats.txt", result);
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
