const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawans.slice(0, -1);
  // console.log(padawans);
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const res = scores.map((el) => Number(el));
  // console.log(res);
  return res;
}
getLightsaberScores();

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  const res = padawans.map((el, i) => [el, scores[i]]).slice(0, -1);
  // console.log(res);
  return res;
}
getStats();

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  const data = padawans.filter((el) => !!el).map((item, i) => item.concat(` ${scores[i]}`)).join('\n');
  const writeFile = fs.writeFileSync('./data/stats.txt', data, 'utf-8');
  return writeFile;
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
