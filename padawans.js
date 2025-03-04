const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split(EOL);
  return data;
}
// getPadawanNames();

function getLightsaberScores() {
  const scoresData = fs.readFileSync('data/scores.txt', 'utf-8').trim().split(EOL);
  const nums = scoresData.map((n) => Number(n));
  return nums;
}
// getLightsaberScores();

function getStats() {
  const stats = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const namesArr = names.map((el) => [el]);
  const scoresArr = scores.map((el) => [el]);

  for (let i = 0; i < namesArr.length; i++) {
    const padawans = [];
    for (let j = 0; j < namesArr[i].length; j++) {
      padawans.push(namesArr[i][j], scoresArr[i][j]);
    }
    stats.push(padawans);
  }
  return stats;
}
getStats();

function writeStats() {
  const stats = getStats();
  const str = stats.join(EOL).replaceAll(/,/g, ' ')
  console.log(str);
  
  fs.writeFileSync('data/stats.txt', str, 'utf-8')
}
writeStats()



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
