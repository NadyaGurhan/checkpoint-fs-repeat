const fs = require('fs');

fs.writeFileSync('./data/stats.txt', '');
function getPadawanNames() {
  let list = fs.readFileSync('./data/padawans.txt', 'utf-8');
  list = list.split('\n');
  const padavans = [];
  for (let i = 0; i < list.length; i += 1) {
    padavans.push(list[i]);
  }
  padavans.pop();
  return padavans;
}

function getLightsaberScores() {
  let list = fs.readFileSync('./data/scores.txt', 'utf-8');
  list = list.split('\n');
  const scores = [];
  for (let i = 0; i < list.length; i += 1) {
    scores.push(+list[i]);
  }
  return scores;
}

function getStats() {
  let list = fs.readFileSync('./data/padawans.txt', 'utf-8');
  list = list.split('\n');
  let scoreList = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreList = scoreList.split('\n');
  const padavans = [];
  for (let i = 0; i < list.length; i += 1) {
    padavans.push([list[i]]);
  }
  padavans.pop();
  for (let i = 0; i < padavans.length; i += 1) {
    padavans[i].push(+scoreList[i]);
  }
  return padavans;
}

function writeStats() {
  let list = fs.readFileSync('./data/padawans.txt', 'utf-8');
  list = list.split('\n');
  let scoreList = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreList = scoreList.split('\n');
  const padavans = [];
  for (let i = 0; i < list.length; i += 1) {
    padavans.push([list[i]]);
  }
  padavans.pop();
  for (let i = 0; i < padavans.length; i += 1) {
    padavans[i].push(scoreList[i]);
  }
  for (let i = 0; i < padavans.length; i += 1) {
    console.log(padavans[i]);
    fs.appendFileSync('./data/stats.txt', `${padavans[i].join(' ')}\n`, 'utf-8');
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
