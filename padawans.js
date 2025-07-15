const fs = require('fs');
const { EOL } = require('os')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const newArr = names.slice(0, -1);
  return newArr;
}
// getPadawanNames ()

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const nums = scores.map(Number);
  return nums;
}

function getStats() {
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  const newArr = [];
  for (let i = 0; i < names.length; i++) {
      newArr.push([names[i], scores[i]]);
    }

    // console.log(newArr);
  
  return newArr
}
// getStats();

function writeStats() {
  const start = getStats()
  const str = start.join(`${ EOL }`).replace(/,/g, " ")
  // const newStr = str.replace(/,/g, " ")
  const written = fs.writeFileSync('./data/stats.txt', `${str}\n`, 'utf-8');
  return written
}
writeStats()