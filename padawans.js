const fs = require('fs')
const names = fs.readFileSync(`./data/padawans.txt`, "utf-8").trim().split('\n')
// console.log(names);
function getPadawanNames() {
  return names
}

// console.log(getPadawanNames()); 
const scores = fs.readFileSync(`./data/scores.txt`, "utf-8").split('\n')
function getLightsaberScores() {
  return scores.map(el => Number(el))
}

function getStats() {
  const array1 = getPadawanNames();
  const array2 = getLightsaberScores();
  let stats = []
  for(let i = 0; i < array1.length; i++) {
    stats.push([array1[i], array2[i]])
  }
  return stats  
}

function writeStats(stats) {
  const info = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', info, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
