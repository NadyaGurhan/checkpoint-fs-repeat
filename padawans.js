const fs = require('fs');
const { resourceLimits } = require('worker_threads');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  return names.split('\n');
}

function getLightsaberScores() {
  const file = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let scores = [];
  for (let i = 0; i < file.length; i++) {
    scores.push(+file[i]);
  }
  return scores;
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let list = [];
  for (let i = 0; i < names.length; i++) {
    list.push([names[i], scores[i]]);
  }
  return list;
}

function writeStats() {
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
