/* eslint-disable linebreak-style */
const fs = require('fs');

const padawansPATH = 'data/padawans.txt';
const padawanScoresPATH = 'data/scores.txt';
const statsFileName = 'stats.txt';

function readFile(path) {
  const data = fs.readFileSync(path, 'utf-8');
  return data;
}

function makeArrayFromTxtData(str) {
  return str.trim().split('\n');
}

function getPadawanNames() {
  const padawansData = readFile(padawansPATH);
  const padawansNamesArr = makeArrayFromTxtData(padawansData);
  return padawansNamesArr;
}

function getLightsaberScores() {
  const padawanScoresData = readFile(padawanScoresPATH);
  const padawanScoresArr = makeArrayFromTxtData(padawanScoresData);
  return padawanScoresArr.map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const res = [];

  names.forEach((name, i) => res.push([name, scores[i]]));

  return res;
}

function writeStats(stats) {
  stats.forEach(([name, scores], i) => {
    let str = '';
    if (i !== stats.length - 1) {
      str = `${name} ${scores}\n`;
    } else {
      str = `${name} ${scores}`;
    }
    fs.appendFileSync(`./data/${statsFileName}`, str);
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  writeStats,
  getStats,
};
