const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\r\n');
  return result;
}

function getLightsaberScores() {
  const array = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\r\n');
  return array.map((elem) => Number(elem));
}

const name = getPadawanNames();
const score = getLightsaberScores();

function getStats() {
  const result = [];
  let innerArr = [];

  for (let i = 0; i < name.length; i += 1) {
    innerArr.push(name[i]);
    innerArr.push(score[i]);
    result.push(innerArr);
    innerArr = [];
  }
  return result;
}

function writeStats() {
  let result = '';

  for (let i = 0; i < name.length; i += 1) {
    result += `${name[i]} ${score[i]}\n`;
  }
  fs.writeFileSync('./data/stats.txt', `${result}`);
}

getPadawanNames();
getLightsaberScores();
getStats();
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
