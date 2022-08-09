const fs = require('fs');

function getArray(file) {
  const fileContent = fs.readFileSync(file, 'utf8').replace(/^\s+|\s+$/g, '').split('\n');
  const result = [];
  for (let i = 0; i < fileContent.length; i += 1) {
    result.push(fileContent[i]);
  }
  return result;
}

function getPadawanNames() {
  const names = getArray('./data/padawans.txt');
  return names;
}

function getLightsaberScores() {
  const scores = getArray('./data/scores.txt');
  const result = [];
  for (let i = 0; i < scores.length; i += 1) {
    result.push(Number(scores[i]));
  }
  return result;
}
function getStats() {
  const result = [];
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  for (let i = 0; i < names.length; i += 1) {
    const tmp = [];
    tmp.push(names[i]);
    tmp.push(scores[i]);
    result.push(tmp);
  }
  return result;
}

function writeStats() {
  const table = getStats();
  const fileName = './data/stats.txt';
  fs.writeFileSync(fileName, String(table[0]).replace(',', ' '));
  for (let i = 1; i < table.length; i += 1) {
    fs.appendFileSync(fileName, '\n' + String(table[i]).replace(',', ' '));
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
