const fs = require('fs');

function getPadawanNames() {
  let newArr = fs.readFileSync(`./data/padawans.txt`, 'utf8').split('\n').map((el) => el);
  newArr.pop();
  return newArr;
}

function getLightsaberScores() {
  return fs.readFileSync(`./data/scores.txt`, 'utf8').split('\n').map((el) => +el);
}

function getStats() {
  return getPadawanNames().map((el, i) => ([el, getLightsaberScores()[i]]));
}

function writeStats() {
  return fs.writeFileSync(`./data/stats.txt`, getStats().map((el) => el.join(' ')).join('\n'));

}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
