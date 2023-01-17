const fs = require('fs');

function getPadawanNames() {
  const list = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  // console.log(list);
  return list;
}
function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  // console.log(score);
  return score.map((el) => +el);
}

function getStats() {
  const names = getPadawanNames();
  const results = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < results.length; i++) {
    newArr.push([names[i], results[i]]);
  }
  return newArr;
}

function writeStats() {
  const data = getStats().join('\n').replace(/,/g, ' ');
  console.log(data);
  const write = fs.writeFileSync('./data/stats.txt', data);
  return write;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
