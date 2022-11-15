const { log } = require('console');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8').split('\n').slice(0,-1);
const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  let result = [];
  scores.forEach((element) => {
    result.push(+element);
  });
  return result;
}

function getStats() {
  let result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], +scores[i]]);
  }
  return result;
}

function writeStats() {
  let result = [];
  fs.writeFileSync(__dirname + '/data/stats.txt', '');
  for (let i = 0; i < padawans.length; i += 1) {
    result.push(`${padawans[i]} ${+scores[i]}`);
    fs.appendFileSync(__dirname + '/data/stats.txt', `${padawans[i]} ${+scores[i]}`);
    if (padawans[i+1]) fs.appendFileSync(__dirname + '/data/stats.txt', `\n`);
  }
}