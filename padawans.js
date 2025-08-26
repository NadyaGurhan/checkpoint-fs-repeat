const fs = require('fs');
const {EOL} = require('os')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(i => +i);
}

function getStats() {
  const name = getPadawanNames();
  const number = getLightsaberScores();
  const status = []
  for (let i = 0; i < name.length; i++){
      status.push([name[i],number[i]])
  }
  return status
}

function writeStats(stats) {
const status = stats.map((el) => el.join(' '))
return fs.writeFileSync('./data/stats.txt', status.join(EOL) + EOL);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
