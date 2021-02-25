
const fs = require('fs');

function getPadawanNames() {
   return fs.readFileSync('data/padawans.txt', 'utf8').split('\n').slice(0, 4);
};

function getLightsaberScores() {
   return fs.readFileSync('data/scores.txt', 'utf8').split('\n').slice(0, 4).map(elem => +elem);

};

function getStats() {
   const dataNames = [];
   const names = getPadawanNames();
   const score = getLightsaberScores();

   for (let i = 0; i < dataNames.length; i++){
      for
      dataNames.push(names[i] + score[i]);
   }
   return dataNames;
}

function writeStats(stats) {
   return fs.readFileSync('data/stats.txt', 'utf8', stats.map(data => data.join('').join('\n')));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
