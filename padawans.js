const fs = require('fs');

const getPadawanNames = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = padawans.split('\r\n');
  names.pop();
  return names;
};
const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArray = scores.split('\r\n');
  for (let i = 0;i<scoresArray.length;i+=1) {
    scoresArray[i] = +scoresArray[i];
  }
  return scoresArray;
};
const getStats = () => {
  const padawansStats = [];
  for (let i = 0; i < getLightsaberScores().length; i += 1) {
    padawansStats.push([]);
    padawansStats[i].push(getPadawanNames()[i], getLightsaberScores()[i]);
  }
  return padawansStats;
};

const resultArray = getStats();
let resultStr = '';
for (let i = 0; i < resultArray.length; i += 1) {
  resultArray[i] = resultArray[i].join(' ');
}
resultStr = resultArray.join('\n');
const writeStats = () => {
  fs.writeFileSync('./data/stats.txt', resultStr)
  return true
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());
writeStats()
console.log(resultStr);
