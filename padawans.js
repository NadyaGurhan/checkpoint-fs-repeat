const fs = require('fs')

function getPadawanNames() {
  const name = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  const nameList = [];
  for (let i=0; i<name.length-1;i++){
nameList.push(name[i])
  }
  return nameList
}

  
  function getLightsaberScores() {
    const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
   const num = scores.map(Number)
   return num
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  const newArr = new Array(padawans.length);
  for(let i=0; i<padawans.length; i++) {
  newArr[i] = new Array(2);
  newArr[i][0] = padawans[i];
  newArr[i][1] = Number.parseFloat(scores[i])
  } return newArr




}

function writeStats(stats, path) {
  path = 'data/stats.txt';
  const statsString = new Array(stats.length);
  for (let i = 0; i < stats.length; i++) {
    statsString[i] = stats[i].join(' ');
  }
  fs.writeFileSync(path, statsString.join('\n'));
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
