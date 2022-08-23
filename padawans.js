const fs = require('fs');

function getPadawanNames() {
  const padavan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padavan.split('\n');
}
// getPadawanNames()
getPadawanNames();

function getPadawanScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n');
}
getPadawanScores();

function getStats() {
  const dir = fs.readdirSync('./data');
  let newStr = '';
  for (let i = 0; i < dir.length; i++) {
    const file = fs.readFileSync(`./data/${dir[i]}`, utf - 8);
    newStr += file;
  }
}
getStats();


function writeStats() {
  fs.writeFileSync('./data/stats.txt', newStr)
}
writeStats()

module.exports = {
  getPadawanNames,
  getPadawanScores,
  getStats,
  writeStats,
};
