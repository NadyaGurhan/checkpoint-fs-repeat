const fs = require('fs');
const { EOL }  = require('os');


function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split(EOL).filter(Boolean);
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split(EOL).map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const formattedStats = stats.map(([name, score]) => (`${name} ${score})`.join(EOL)));
  fs.writeFileSync('data/stats.txt', formattedStats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


