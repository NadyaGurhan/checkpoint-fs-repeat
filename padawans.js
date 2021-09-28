const fs = require('fs');

function getFileContent(fileName) {
  return fs.readFileSync(`./data/${fileName}.txt`, 'utf-8');
}

function writeContentToFile(fileName, content) {
  fs.writeFileSync(`./data/${fileName}.txt`, content);
}

function getPadawanNames() {
  return getFileContent('padawans').trim().split('\n');
}

function getLightsaberScores() {
  return getFileContent('scores').trim().split('\n').map((score) => Number(score));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  writeContentToFile('stats', getStats().map((el) => el.join(' ')).join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
