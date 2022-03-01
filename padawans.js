const fs = require('fs');

function getPadawanNames() {
  const arrPadawans = [];
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  console.log(padawans);

  for (let i = 0; i < padawans.length; i += 1) {
    arrPadawans.push(padawans[i]);
  }
  return arrPadawans;
}

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
