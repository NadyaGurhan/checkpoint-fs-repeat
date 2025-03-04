const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.trim().split(EOL);
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split(EOL);
  return score.map((el) => Number(el));
}

function getStats() {
  const stats = [];
  const names = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], score[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  let string = '';
  for (let i = 0; i < stats.length; i++) {
    string += `${stats[i][0]} ${stats[i][1]}${EOL}` ;
  }
  fs.writeFileSync('data/stats.txt', string);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
