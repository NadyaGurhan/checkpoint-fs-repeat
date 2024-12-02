const { log } = require('console');
const fs = require('fs')

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return data.split('\n').slice(0, -1)
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  return data.split('\n').map(el => +el)
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores()
  const newData = [];  
  for (let i = 0; i < names.length; i++) {
    newData.push([names[i]]);    
  }
  newData.forEach((el, i) => el.push(scores[i]))
  return newData
} 

function writeStats(newData) {
  fs.writeFileSync('./data/stats.txt', newData.map(el => el.join(' ')).join('\n'))
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
