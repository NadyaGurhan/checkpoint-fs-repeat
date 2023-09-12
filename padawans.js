const fs = require('fs');

function getPadawanNames() {
  const arrPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split(' ');
  return arrPadawan;
}

function getLightsaberScores() {
  const arrScores = fs.readFileSync('data/scores.txt', 'utf-8').split(' ');
  return arrScores;
}

function getStats() {
  const arrPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split(' ');
  const arrScores = fs.readFileSync('data/scores.txt', 'utf-8').split(' ');
  const result = [];
  for (let i = 0; i < arrPadawan.length && i < arrScores.length) {
    const name = 
  }

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
