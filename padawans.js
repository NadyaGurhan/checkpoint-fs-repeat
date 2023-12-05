const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const padawans = fs.readFileSync(
    path.join(__dirname, 'data', 'padawans.txt'),
    'utf-8'
  );
  return padawans.trim().split('\r\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync(
    path.join(__dirname, 'data', 'scores.txt'),
    'utf-8'
  );
  const result = scores.split('\r\n').map((el) => +el);
  return result;
}

const padArray = getPadawanNames();
const scoreArray = getLightsaberScores();

function getStats() {
  const array = padArray.map((el, ind) => [el, scoreArray[ind]]);
  return array;
}

const resWrite = getStats();
const resultWrite = resWrite.map((el) => el.join(','));
console.log(resultWrite.map((el) => el.replace(',', ' ')).join('\n'));

function writeStats() {
  const fileName = 'stats.txt';
  fs.appendFileSync(`./data/${fileName}`, `${resultWrite}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
