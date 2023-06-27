const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\r\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\r\n');

// console.log(padawans);
// console.log(scores);

function getPadawanNames() {
  return padawans
}

function getLightsaberScores(){
  const scoresNum = scores.map(str => parseFloat(str));
  return scoresNum
}
function getStats(){
  const stats = []
  const scoresNum = scores.map(str => parseFloat(str));
  for (let i = 0; i < padawans.length; i++){
    const padawan = [padawans[i]]
    padawan.push(scoresNum[i])
    stats.push(padawan)
  }
  return stats
}
function writeStats(stats){
  const statsAll = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  return fs.writeFileSync(`./data/stats`,statsAll, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
