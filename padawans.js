const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  return names.split(' ');
}

function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf8');
  return names.split(' ');
}

function getStats() {

}

function writeStats() {

}
//вчера не делал эти тесты, не успел, не до конца догоняю что нужно делать) 