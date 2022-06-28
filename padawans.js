
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs');
function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map(el => +el); 
}
console.log(getLightsaberScores());



function getStats() {
  let stats = [];
  const nameList = getPadawanNames();
  const scoreList = getLightsaberScores();
  
    for (let i = 0; i < nameList.length; i += 1 ) {
    stats.push([nameList[i], scoreList[i]]);
  }
  return stats;
}
function writeStats() {
  const dataList = getStats().map(el => el.join(' ')).join('\n');

  fs.writeFileSync('data/stats.txt', dataList);
  return dataList;
}

// console.log(getStats());
// console.log(writeStats());
