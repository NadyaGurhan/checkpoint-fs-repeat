
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0,4);
}

function getLightsaberScores() {
  const kek = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').slice(0,4);
  return kek.map(a => Number(a));
};

function getStats() {
  const arrP = getPadawanNames();
  const arrS = getLightsaberScores();
  let pepega = [];
  for(let i = 0; i < arrP.length; i++) {
    pepega[i] = [arrP[i], arrS[i]];
  }
  return pepega;
}

function writeStats() {
  const okgo = getStats();
  for(let i = 0; i < okgo.length; i++) {
    fs.appendFileSync('./data/stats.txt', okgo[i].join(',').replace(',', ' ') + '\n', 'utf-8');
  }
}