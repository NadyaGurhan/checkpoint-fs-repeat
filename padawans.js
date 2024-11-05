const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
   getStats,
 /* writeStats, */
};

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.trim().split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

  const arr = scores.split('\n');
  return arr.map((el) => Number(el));
}

function getStats() {

const name = getPadawanNames();
const scores = getLightsaberScores();

const arr =[];
for (let i = 0; i< name.length; i++) {
  arr.push([name[i], scores[i]])
}
return arr

}
