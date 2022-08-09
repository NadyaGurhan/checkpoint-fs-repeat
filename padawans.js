const fs = require('fs');
const path = require('path');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileName = 'padawans.txt';
  const filePath = path.resolve(__dirname, './data', fileName);
  const array = fs.readFileSync(filePath, 'utf8').split('\n');
  return array.slice(0, array.length - 1);
}

function getLightsaberScores() {
  const fileName = 'scores.txt';
  const filePath = path.resolve(__dirname, './data', fileName);
  const array = fs.readFileSync(filePath, 'utf8').split('\n');
  return array.map(el => +el);
}

function getStats() {
  const result = [];
  getPadawanNames().forEach((el, i) => {
    result.push([el, getLightsaberScores()[i]])
  });
  return result;
}

function writeStats() {
  const fileName = 'stats.txt';
  const filePath = path.resolve(__dirname, './data', fileName);
  fs.writeFileSync(filePath, getStats().map(el => el.join(' ')).join('\n'));
}
