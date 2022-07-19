const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  return padawans.split(" ");
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  return scores.split(" ");
}

function getStats() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8',);
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8',);
  fs.appendFileSync(`./data/stats.txt`, `[${padawans + scores}]\n`, 'utf-8')
}

console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats(process.argv[2]));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
