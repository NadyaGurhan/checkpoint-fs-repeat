const fs = require('fs');

const allPadawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const swordScore = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  return allPadawan.slice(0, -1);
}

function getLightsaberScores() {
  return swordScore.map(el => Number(el));
}

function getStats() {
let result = [];
const arrPad = getPadawanNames();
const arrScor = getLightsaberScores();
for (let i = 0; i < arrPad.length; i++) {
  result.push([arrPad[i],arrScor[i]])
  
}

return result;
};

function writeStats() {
  let result = '';
let arr = getStats().join(',\n');
for (let item of arr) {
  if(item !== ','){
    result += item
  } 
  
  }
fs.writeFileSync('./data/stats.txt', arr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};