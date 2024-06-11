const fs = require('fs');
const os = require('os');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split(os.EOL);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split(os.EOL).map((el) => Number(el));
}

function getStats() {
  const res = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    for (let j = 0; j < scores.length; j += 1) {
      let arr = [];
      arr.push(padawans[i], scores[j]);
      res.push(arr);
    }
  }
  return res;
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
