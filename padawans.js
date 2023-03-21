const fs = require('fs');

function getPadawanNames() {
  const arr = [];
  const result = fs.readFileSync("data/padawans.txt", 'utf8');
  const names = result.split('\n').filter(name => name.trim() !== '');
  arr.push(result);
  return names;
}
function getLightsaberScores() {
  const funcX = getPadawanNames();
  const e = fs.readFileSync("data/scores.txt")
 funcX.forEach(el => el.push(e))
  return funcX
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
