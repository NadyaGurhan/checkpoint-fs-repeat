const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split(EOL).filter((name) => name.trim() !== '');
}

//console.log(getPadawanNames());

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split(EOL).map((score) => parseFloat(score));
}
//console.log(getLightsaberScores());

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = names.map((name, index) => [name, scores[index]]);

  return stats;
}

//console.log(getStats());

function writeStats() {
  let names = getStats()
  let str = names.join(EOL)
  let res = str.split(',').join(' ');
  let writeFile = fs.writeFileSync('data/stats.txt', res, 'utf8')
  return writeFile
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
