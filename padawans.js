const fs = require('fs')

function getPadawanNames () {
  const list = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  list.pop()
  return list;
}

function getLightsaberScores () {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return scores.map(el => el / 1);
}

function getStats () {
  const list = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  list.pop()
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map(el => el / 1);
  const result = []
  list.map(el => result.push(el))
  
  return result;
}

function writeStats () {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
