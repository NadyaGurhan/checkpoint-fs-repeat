const fs = require('fs');
const { EOL } = require('os');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames()  {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL)
}

function getLightsaberScores()  {
  return fs.readFileSync('./data/scores.txt', 'utf-8')
  .split(EOL)
  .map((el) => Number(el))
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const merged = [];
  const maxLength = Math.max(padawans.length, scores.length);
  for (let i = 0; i < maxLength; i++) {
    const res = []
    if (i < padawans.length) res.push(padawans[i]);
    if (i < scores.length) res.push(scores[i]);
    merged.push(res)
  }
  return merged;
}

function writeStats() {
  const data = JSON.stringify(getStats());
  return fs.writeFileSync('./data/stats.txt', data, 'utf-8')
}