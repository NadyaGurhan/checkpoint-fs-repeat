const fs = require('fs');

function getPadawanNames() {
  const text = fs.writeFileSync('./data/padawans.txt', 'utf-8');
  return console.log(text);
}

function getLightsaberScores() {
  const text1 = fs.writeFileSync('./data/scores.txt', 'utf-8');
  return console.log(text1);
}

function getStats() {
  // const text = fs.writeFileSync('./data/padawans.txt', 'utf-8');
  // const text1 = fs.writeFileSync('./data/scores.txt', 'utf-8');
  const stat = getPadawanNames.map(((el, i) => el + getLightsaberScores[i]));
  return stat;
}
console.log(getStats());

const writeStats = () => {};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
