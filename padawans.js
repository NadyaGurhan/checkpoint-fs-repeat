const fs = require('fs');

const padawansTxt = fs.readFileSync('./data/padawans.txt', 'utf-8');

const scoresTxt = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const PadawanseList = padawansTxt.split('\n');
  const PadawanseListTrue = PadawanseList.slice(0, PadawanseList.length-1);
return PadawanseListTrue;
}
getPadawanNames();

function getLightsaberScores() {
  const scoreList = scoresTxt.split('\n');
  const scoreListTrue = scoreList.map(Number);
  return scoreListTrue;
}
getLightsaberScores();

const padawans = getPadawanNames();
const scores = getLightsaberScores();

function getStats() {
  const statistic = [];
  for(let i = 0; i < padawans.length; i +=1){
    statistic.push([padawans[i], scores[i]]);
  }
  return statistic;
}
getStats();

const stats = getStats();

function writeStats() {
  const statList =  stats.map((el) => el.join(' '));
  const writeStatList = fs.writeFileSync('./data/stats.txt', statList.join('\n'));
  return writeStatList;
}
writeStats();


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
