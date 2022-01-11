const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, -1);
}

 const arrPadawans = padawans.split('\n')
 const arrScores = scores.split('\n');

  function getLightsaberScores() {
    const arr = [];
    for (let i = 0; i < arrScores.length; i++) {
      arr[i] = +arrScores[i];
    }
    return arr;
}


function getStats () {
  const stats = []
  for (let i = 0; i < arrScores.length; i++) {
    stats[i] = [arrPadawans[i], arrScores[i]]
  } return stats
  // fs.writeFileSync(`data/stats.txt`, stats)
}
console.log(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
