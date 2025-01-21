const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
const { EOL } = require('os');

function getPadawanNames() {
  return padawans.split(EOL);
}

function getLightsaberScores() {
  return scores.split(EOL).map((item) => Number(item));
}

function getStats() {
  const arrPadawans = padawans.split(EOL);
  const arrScores = scores.split(EOL).map((item) => Number(item));
  const result = new Array(arrPadawans.length);
  for (let i = 0; i < arrPadawans.length; i++) {
    result[i] = [];
    result[i].push(arrPadawans[i]);
    result[i].push(arrScores[i]);
  }
  return result;
}

function writeStats() {
  const arr = getStats();
  const result = arr.map((el) => `${el[0]} ${el[1]}`);
  fs.writeFileSync(`./data/stats.txt`, result.join(EOL));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
