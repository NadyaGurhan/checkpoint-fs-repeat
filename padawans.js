const fs = require('fs');

function getFile(file) {
  return fs.readFileSync(`${file}.txt`, 'utf-8');
}

function getPadawanNames() {
  const padawans = getFile('./data/padawans');
  return padawans.split('\n').slice(0, 4);
}

function getLightsaberScores() {
  const scores = getFile('./data/scores');
  const result = scores.split('\n').map((elem) => Number(elem));
  return result;
}

function getStats() {
  const scores = getFile('./data/scores');
  const padawans = getFile('./data/padawans');
  const arrName = padawans.split('\n').slice(0, 4);
  const arrScore = scores.split('\n').map((elem) => Number(elem));
  const res = arrName.map((elem) => elem.split('\n'));
  const a = [];
  for (let i = 0; i < arrName.length; i += 1) {
    a.push(res[i], arrScore[i]);
  }
  return a;
}

function writeStats() {
  const data = fs.writeFileSync('./data/stats.txt', getStats().join('\n'));
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
