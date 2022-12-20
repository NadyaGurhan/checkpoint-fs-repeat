const fs = require("fs");
const readPadawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, "utf-8");
const readScores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, "utf-8")
  .split("\n");
const writeStat = fs.writeFileSync('./data/stats.txt', 'getStats()')



function getPadawanNames() {
  return readPadawans.split('/n').join(',')
}

function getLightsaberScores() {
  let result = [];
  for (let i=0;i<readScores.length;i++) {
    result.push(Number(readScores[i]))
  }
  return result;
}

function getStats() {
  let result = [];
  for (let i = 0; i < readPadawans.length; i++) {
    let names = readPadawans[i];
    result.push(names);
  }
  for (let j = 0; j < readScores.length; j++) {
    let scores = readScores[j];
    result.push(scores);
  }

  return result;
}

function writeStats() {
  return  writeStat
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
