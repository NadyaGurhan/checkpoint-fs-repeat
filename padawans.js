
const fs = require('fs');
let list = [];
let scoreList = [];
function getPadawanNames() {
  list = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  for (let i = 0; i < list.length; i++) {
    if (list[i] === '') {
      list.splice(i, 1);
    }
  }
  return list;
}
getPadawanNames();
function getLightsaberScores() {
  scoreList = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < scoreList.length; i++) {
    scoreList[i] = +scoreList[i]
  }
  // scoreList.map(item => item = +item);
  return scoreList;
}
getLightsaberScores();

function getStats() {
  let stats = []
console.log(list);
console.log(scoreList);
for (let i = 0; i < 4; i++) {
  stats[i] = [];
  stats[i].push(list[i], scoreList[i]);
  console.log(stats);
  
  fs.appendFileSync(`./data/stats.txt`, stats.join('/n'));
  return stats.join('/n')
}
}

getStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
