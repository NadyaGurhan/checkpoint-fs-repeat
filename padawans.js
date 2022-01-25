const fs = require('fs');


function getPadawanNames() {
  const padawanNames = fs.readFileSync('data/padawans.txt', 'utf8', (err) => {
    if (err) throw err;
  }).split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8', (err) => {
    if (err) throw err;
  }).split('\n');
  return scores.map((score) => Number(score));
}

function getStats() {
  const scores = getLightsaberScores();
  const padawanNames = getPadawanNames();
  const stats = [];
  
}

console.log(getStats());

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
