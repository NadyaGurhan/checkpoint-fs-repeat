const fs = require('fs');

function getPadawanNames() {
  const name = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  return name;
}

function getLightsaberScores() {
  let score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  score = score.map(el => +el);
  return score;
}

function getStats() {
  const dataName = getPadawanNames();
  const scoresList = getLightsaberScores();
  let arr = [];
  const arrResult = [];

  for (let i = 0; i < dataName.length; i++) {
    arr.push(dataName[i], scoresList[i]);
    arrResult.push(arr);
    arr = [];
  }
  // arr.map(el => el.join(''))
  // return fs.writeFileSync('./data/status.txt', arr.map(el => el.join('')))
  return arrResult;
}

function writeStats() {
  let strElement = getStats();

  strElement = strElement.map((el) => el.join()).join('\n');
  let value = strElement.replace(/,/g, ' ');
  return fs.writeFileSync('./data/status.txt', value);
}
writeStats();
console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
