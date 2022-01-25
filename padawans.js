const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  return padawans.filter(elem => elem);
}

function getLightsaberScores() {
  return scores.map(elem => +elem);
}

function getStats() {
  let res = [];
  for (i = 0; i < scores.length; i++) {
    res.push([padawans[i], +scores[i]])
  }
  return res;
}

function writeStats() {
  function stringify() {
    let res = '';
    for (i = 0; i < scores.length - 1; i++) {
      res += `${padawans[i]} ${scores[i]}\n`
    }
    res += `${padawans[scores.length-1]} ${scores[scores.length-1]}`;
    return res;
  }
  fs.writeFileSync('data/stats.txt', stringify(), 'utf8');
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
