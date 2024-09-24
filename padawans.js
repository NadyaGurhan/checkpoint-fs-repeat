const fs = require("fs");

const names = fs.readFileSync("./data/padawans.txt", "utf-8").split("\r\n");
const scores = fs.readFileSync("./data/scores.txt", "utf-8").split("\r\n");

function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  const result = [];
  for (let i = 0; i < scores.length; i++) {
    result.push(Number(scores[i]));
  }
  return result;
}

function getStats() {
  const result = [];

  for (let i = 0; i < scores.length; i++) {
    result.push(Number(scores[i]));
  }

  const stats = names.map((el, index) => `${el}, ${result[index]}`);

  for (let i = 0; i < stats.length; i++) {
    stats[i] = stats[i].split(", ");
  }

  for (let i = 0; i < stats.length; i++) {
    stats[i][1] = Number(stats[i][1]);
  }
  return stats;
}

function writeStats() {
  fs.writeFileSync(`./data/stats.txt`, getStats().join("\n"));
}

console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
