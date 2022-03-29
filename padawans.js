const fs = require('fs');
const { join } = require('path');

function getPadawanNames() {
  const info = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  info.pop();
  return info;
}
console.log(getPadawanNames());
function getLightsaberScores() {
  const info = fs.readFileSync('data/scores.txt', 'utf8').split('\n').map((element) => element * 1);
  return info;
}
console.log(getLightsaberScores());
function getStats() {
  let result = [];
  let result2 = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    result.push(`${getPadawanNames()[i]}`, getLightsaberScores()[i]);
    result2.push(result);
    result = [];
  }
  return result2;
}
console.log(getStats());

function writeStats() {
  let data = getStats().reduce((acc, el) => acc + `${el.join(' ')}\n`, '');
  data = data.slice(0, data.length - 1);
  return fs.writeFileSync('data/stats.txt', `${data}`);
}
console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
