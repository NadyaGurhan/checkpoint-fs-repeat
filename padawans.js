const fs = require('fs');

function getPadawanNames() {
  const result = [];
  const temp = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  temp.forEach(el => result.push(el));

  return result;
}

function getLightsaberScores() {
  const result = [];
  const temp = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  temp.forEach(el => result.push(el));
  return result;
}

function getStats() {
  const name = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const result = [];
  for (let i =0; i<name.length; i++) {
    result.push(name[i],score[i]);
  }
  return result;
}

function writeStats () {
  
  fs.writeFileSync(`./data/stats.txt`,result,'utf-8');
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
