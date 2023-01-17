const fs = require('fs');

const padawan = fs.readFileSync('data/padawans.txt', 'utf-8');
const score = fs.readFileSync('data/scores.txt', 'utf-8');
function getPadawanNames() {
  const names = padawan.split('\n');
  return names.slice(0, -1);
}
function getLightsaberScores() {
  const scory = score.split('\n');
  const scor = scory.map((el) => Number(el));
  return scor;
}
getLightsaberScores();
function getStats() {
  const names = padawan.split('\n');
  const newNames = names.slice(0, -1);
  const scory = score.split('\n');
  const scor = scory.map((el) => Number(el));
  const getStat = [];
  for (let i = 0; i < newNames.length; i += 1){
    const newArr = [];
  }
}
getStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
