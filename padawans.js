const fs = require('fs');

function getPadawanNames() {
  let str = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  let newArr = str.split('\r\n');
  return newArr;
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  let str = fs.readFileSync('./data/scores.txt', 'utf-8');
  return str.split('\r\n').map(Number);
}
// console.log(getLightsaberScores());

function getStats() {

  let pad = getPadawanNames();
  let scor = getLightsaberScores();
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < scor.length; i++) {
    arr1 = [pad[i], scor[i]];
    arr2.push(arr1);
  }

  return arr2;

}
// console.log(getStats());
function writeStats() {
  const stats = getStats().join('\n').replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', stats);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
