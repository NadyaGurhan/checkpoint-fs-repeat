const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');

function getLightsaberScores() {
  const processData = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const dataArr = processData.split('\n');
  for (let i = 0; i < dataArr.length; i++) {
    dataArr[i] = Number(dataArr[i]);
  }
  return dataArr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let finalArr = [];
  for (let i = 0; i < padawans.length; i++) {
    finalArr.push([padawans[i], scores[i]]);
  }
  return finalArr;
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
