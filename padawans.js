const fs = require('fs');

function getPadawanNames() {
  let padavansList = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padavansList;

}

function getLightsaberScores() {
  const scoreList = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(el => Number(el));
  return scoreList;
}

function getStats() {

}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
console.log(getPadawanNames(`/data/padawans.txt`));
