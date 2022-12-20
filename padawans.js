const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
   writeStats,
};

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const result = padawans.split('\n').splice(0, 4);
  return result;
}

function getLightsaberScores() {
  const result = scores.split('\n').map((el) => Number(el));
  return result;
}

function getStats() {
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    array.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return array;
}

function writeStats() {
  const dataFromArray = getStats().map(el => el.join(' ')).join('\n');
  const pathToData = './data/stats.txt';
  fs.appendFileSync(`${pathToData}, ${dataFromArray}`);
  console.log(dataFromArray);
}
