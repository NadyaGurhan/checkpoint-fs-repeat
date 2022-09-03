const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const padavans = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf-8').split('\n');
  padavans.pop();
  return padavans;
}

function getLightsaberScores() {
  const light = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8').split('\n');
  const saber = light.map((el) => Number(el));
  return saber;
}

function getStats() {
  const padavans = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf-8').split('\n');
  const light = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8').split('\n');
  const result = padavans.slice(0, padavans.length - 1);
  const arr = [];
  for (let i = 0; i < result.length; i += 1) {
    arr.push([result[i], Number(light[i])]);
  }
  return (arr);
}

function writeStats() {
  const padavans = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf-8').split('\n');
  const light = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8').split('\n');
  const result = padavans.slice(0, padavans.length - 1);
  let str = '';
  for (let i = 0; i < result.length; i += 1) {
    str += `${result[i]} ${Number(light[i])}\n`;
  }
  fs.appendFileSync('data/stats.txt', `${str.slice(0, str.length - 1)}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
