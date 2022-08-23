const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  names.pop();
  return names
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  return score.map((el) => el = Number(el))
}

function getStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  names.pop();
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let resultArr = [];
  for (let i = 0; i < names.length; i += 1) {
    let arr = []
    arr.push(names[i]);
    arr.push(Number(score[i]));
    resultArr.push(arr);
  }
  return resultArr
}

function writeStats() {
  const stats = getStats();
  let string = '';
  stats.forEach((el) => {
    string = string + el.join(' ') + '\n';
  })
  fs.writeFileSync('./data/stats.txt')
}
// console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
