const fs = require('fs');


function getPadawanNames() {
  const fileName = 'data/padawans.txt';
  let str;
  str = fs.readFileSync(fileName, 'utf-8').trim();
  let arrNames = str.split('\n');
  return arrNames;
}

function getLightsaberScores() {
  const fileName = 'data/scores.txt';
  str = fs.readFileSync(fileName, 'utf-8');
  let arrScores = str.split('\n');
  for(let i = 0; i < arrScores.length; i += 1){
    arrScores[i] = +arrScores[i];
  }
  return arrScores;
}

function getStats() {
  let statsList = [];
  let statSmall = [];
  for(let i = 0; i < getPadawanNames().length; i += 1){
    statSmall[i] = [getPadawanNames()[i], getLightsaberScores()[i]];
    statsList.push(statSmall[i]);
  }
  return statsList;
}

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', `${getStats().join('\n').split(',').join(' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
