const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const res = padawans.split('\n');
  return res;
}

function getLightsaberScores() {
  const point = fs.readFileSync('./data/scores.txt', 'utf8');
  //const res = padawans.split('\n');
  return (+point);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
};
