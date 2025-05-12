// Что-то ооочень тяжело...

const fs = require('node:fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');

  return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');

  const result = [];
  data.trim().split('\n').forEach(item => {
    result.push(Number(item));
  })

  return result; 
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  const result = [];
  for (let i = 0; i < padawans.length; i ++) {
    result.push([padawans[i], scores[i]])
  }

  return result;
}

function writeStats() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
