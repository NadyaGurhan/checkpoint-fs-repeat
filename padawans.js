const fs = require('fs');
function getPadawanNames(){
  return fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').trim().split('\n')
}

function getLightsaberScores(){
  return fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').map((el) => el = Number(el));
}

function getStats(){
  return getPadawanNames().map((item, i) => item = [item, getLightsaberScores()[i]])
}

function writeStats(){
  fs.writeFileSync(`${__dirname}/data/stats.txt`, getStats().join('\n').replace(/,/g, ' '))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
