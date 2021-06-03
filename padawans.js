


// .split('\n');
// allPadawans.shift();


const fs = require('fs');

function getPadawanNames() {
  const filePath = './data/padawans.txt';
  const names = fs.readFileSync(filePath, 'utf8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  const filePath = './data/scores.txt';
  const scores = fs.readFileSync(filePath, 'utf8').split('\n');
  return scores.map(item => Number(item));
}

function getStats() {
  let result = []
  result.map()
  console.log(names, scores)
}

let writeStats = 1;


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
