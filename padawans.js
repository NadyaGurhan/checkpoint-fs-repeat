const fs = require('fs');

function getPadawanNames() {
  const arrNames = [];
  const lint = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  for (let i = 0; i < lint.length; i++) {
    if (lint[i].length > 0) {
      arrNames.push(lint[i]);
    }
  }
  return arrNames;
}

function getLightsaberScores() {
  const arrScores = [];
  const scores = Number(fs.readFileSync(`data/scores.txt`, 'utf-8').split('\n'));
  for (let i = 0; i < scores.length; i++) {
    arrScores.push(scores[i]); 
  }
  return arrScores;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
