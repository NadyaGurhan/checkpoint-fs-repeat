const fs = require('fs')

const names =  fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
names.pop();
const scores =  fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
const resScore = scores.map((score) => Number(score));

function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  return resScore;
}

function getStats() {
  let padArr = []
  for(let i = 0; i < names.length; i++){
    padArr.push([]);
    padArr[i].push(names[i], resScore[i])
  }
  return padArr; 
}

function writeStats() {
  let padArr = []
  for(let i = 0; i < names.length; i++){
    padArr.push([]);
    padArr[i].push(names[i], resScore[i])
  }
  const result = padArr.join(' ');
  const resStats = result.replace(/(\d)( )/g, '$1\n').replace(/,/g, ' ');
  return fs.writeFileSync('data/stats.txt', resStats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
