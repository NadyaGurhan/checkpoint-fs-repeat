
const fs = require('fs')


//реализуем сначала getPadawansNames

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8');
  return names.trim().split('\n');
}

//затем реализуем getLightsabersScores

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores.trim().split(' ').map(number);
}

// затем реализуем getStats

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i ++) {
    result.push([names[i], scores[i]]);
  }
  return result; 
}

//writeStats

function writeStats (stats) {
  let text = '';
  for (let i = 0; i < stats.length; i ++) {
///.....?
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



// * проверка
if (require.main === module) {
  const stats = getStats();
  writeStats(stats);
  console.log(' файл stats.txt создан и выполнен');
}
