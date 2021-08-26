const fs = require('fs');
function getPadawanNames() {
  let arr;
  let str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  arr = str.split('\n');
  arr.pop(1);
  return arr;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  let arr;
  let str = fs.readFileSync('./data/scores.txt', 'utf-8');
  num = str.split('\n');
  return num.map(el => Number(el));
}
function getStats() {
  const score = getLightsaberScores();
  const name = getPadawanNames();
  let result = [];
  for (let i = 0; i < name.length; i++) {
    result.push([name[i], score[i]]);
  }
  return result;
}

function writeStats() {
  const newArr = getStats();
  file = newArr.map(el => el.join(' '));
  let resultFile = file.join('\n');
  fs.writeFileSync('./data/stats.txt', resultFile);
}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
