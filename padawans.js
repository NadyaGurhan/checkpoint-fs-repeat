const fs = require('fs')

function getPadawanNames() {
   const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
   return res = names
   .split('\n')
   .slice(0, -1);
}

function getLightsaberScores() {
   const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
   const res = scores
   .split('\n')
   .map(elem => Number(elem))
   return res;
}

function getStats() {
   const names = getPadawanNames();
   const scores = getLightsaberScores();
   const res = [];
   names.forEach((elem, index) => {
      res.push(elem, scores[index])
   })
   return res;
}

function writeStats(f) {
   const stats = f.join('\n');
   const res = stats.map(elem => elem.join(' '))
   const write = fs.writeFileSync('./data/stats.txt', res);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
