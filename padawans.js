const fs = require('fs');

const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8',
  (error, data) => {
    if (error) throw error;
  });

const dataScores = fs.readFileSync('./data/scores.txt', 'utf8',
  (error, data) => {
    if (error) throw error;
  });

function getPadawanNames() {
  const newPadawans = dataPadawans.trim().split('\n');
  return newPadawans;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = [];
  for (let i = 0; i < dataScores.split('\n').length; i += 1) {
    const n = +(dataScores.split('\n')[i]);
    scores.push(n);
  }
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const padawansOfScores = [];

  for (let i = 0; i < padawans.length; i += 1) {
    const newArr = [];
    newArr.push(padawans[i], scores[i]);
    padawansOfScores.push(newArr);
  }
  return padawansOfScores;
}

function writeStats() {
  const text = getStats();
  fs.writeFile('./data/stats.txt', text, (err) => {
    if (err) {
      console.log('Error');
    }
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
