const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8');

  return names.trim().split('\n');
}
function getLightsaberScores() {
  let mech = fs.readFileSync('./data/scores.txt', 'utf8');

  return mech
    .trim()
    .split('\n')
    .map((el) => Number(el));
}

function getStats() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8');
  let mech = fs.readFileSync('./data/scores.txt', 'utf8');

  const arrayOne = names.trim().split('\n');
  const arrayTwo = mech
    .trim()
    .split('\n')
    .map((el) => Number(el));

  const arrayThree = [];

  for (let i = 0; i < 4; i += 1) {
    arrayThree.push([arrayOne[i], arrayTwo[i]]);
  }

  return arrayThree;
}

function writeStats() {
  fs.openSync('./data/stats.txt', 'w');

  let item = getStats().join('\n');
  let newStr = '';

  fs.appendFileSync('./data/stats.txt', `${item}`);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
