const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(el => el.length !== 0);
  return result;
}
function getLightsaberScores() {
 const result = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
 return result;
}

function getStats() {
  let names = getPadawanNames();
  let num = getLightsaberScores();
  return names.forEach((el, i) => [el, num[i]]);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
