const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const array = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
console.log(array);

"ниче не понял, и я и соседи, обратная связь когда будет - я наверно уже забуду что тут было и она будет без кпд"