const fs = require('fs');

function getPadawanNames() {
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n');
  padawansList.pop();
  return padawansList;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  return scores;
}

// function getStats() {
//   const padawansList = getPadawanNames()
//   const scores = getLightsaberScores()
//   const stats = new Array(4).fill([])//.map((el,i)=>el.push(padawansList[1], scores[1]))
//   stats[0].push(padawansList[0], scores[0])
//   // for (let i = 0; i < stats.length; i++) {
//   //   stats[i].push(padawansList[i], scores[i])
//   //   console.log( padawansList, scores)
//   // }
//   console.log(stats, padawansList, scores)
//   return stats

// }
// getStats()
function getStats() {
  const arr = [];
  const padavans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padavans.length; i++) {
    let arrMin = [];
    arrMin.push(padavans[i], scores[i]);
    arr.push(arrMin);
  }
  return arr;
}
//console.log(getStats());

function writeStats() {
  const arr = getStats();
  const newArr = arr.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', `${newArr}`);
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
