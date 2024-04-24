const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return names.map((el) => (Number(el)));
}

// function getLightsaberScores() {
//   const newArr = [];
//   const names = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
//   names.forEach((el) => newArr.push(Number(el)));
//   return newArr;
// }

// const getLightsaberScores = () => fs
//   .readFileSync('./data/scores.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map((el) => Number(el));

console.log(getLightsaberScores());

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((padawan, index) => [padawan, scores[index]]);
};
console.log(getStats());

// function getStats() {
//   const stats = [];
//   const names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
//   const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
//   for (let i = 0; i < names.length; i += 1) {
//     stats.push([names[i], Number(scores[i])]); // потом принять функции
//   }
//   return stats;
// }

function writeStats(stats) {
  const data = stats.join('\n').replaceAll(',', ' ');
  return fs.writeFileSync('data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
