const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');

function getPadawanNames() {
  const newPadawans = padawans.split('\n');
  return newPadawans.slice(0, -1);
}

function getLightsaberScores() {
  const res = [];
  const newScores = scores.split('\n');
  for (let i = 0; i < newScores.length; i += 1) {
    res.push(+newScores[i]);
  }
  return res;
}

function getStats() {
  const res = [];
  const padawansTemplate = getPadawanNames();
  const scoresTemplate = getLightsaberScores();

  for (let i = 0; i < padawansTemplate.length; i += 1) {
    res.push(Array(padawansTemplate[i], scoresTemplate[i]));
  }

  return res;
}

function writeStats() {
  const arr = getStats().map((elem) => {
     return elem.join(' ')
  });
  const res = arr.join('\n');
  return fs.writeFileSync(`${__dirname}/data/stats.txt`, res);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// console.log(getPadawanNames());
// console.log(getLightsaberScores());
// console.log(writeStats());
// writeStats();
