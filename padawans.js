const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.split(EOL).slice(0, 4);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arrayOfStr = scores.split(EOL).slice(0, 4);
  const arrayOfNum = [];
  for (let i = 0; i < arrayOfStr.length; i++) {
    arrayOfNum.push(Number(arrayOfStr[i]));
  }
  return arrayOfNum;
}

function getStats() {
const arrayOfPadawans = getPadawanNames()
const arrayOfScores = getLightsaberScores()
  return [
    [arrayOfPadawans[0], arrayOfScores[0]],
    [arrayOfPadawans[1], arrayOfScores[1]],
    [arrayOfPadawans[2], arrayOfScores[2]],
    [arrayOfPadawans[3], arrayOfScores[3]],
  ];
}

function writeStats() {
const stats = getStats().join(`\n`)
let result = ''
for (let i = 0; i < stats.length; i++) {
  if (stats[i] === ',') {
    result += ' '
    
  }
  else {
    result += stats[i]
  }
}
console.log(result)
fs.writeFileSync('./data/stats.txt' , result, 'utf-8')
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
