const fs = require('fs').promises;

let padawans = [];
let scores = [];

function getPadawanNames() {
  fs.readFile('./data/padawans.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return;
    }
    padawans = data.split('\r\n');
    console.log(padawans);
  });
}
console.log(getPadawanNames());

function getLightsaberScores() {}

fs.readFile('./data/scores.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }
  scores = data.split('\r\n');
  console.log(scores);
});

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
  padawans,
  scores,
};
