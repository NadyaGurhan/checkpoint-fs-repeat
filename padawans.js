const fs = require ('fs');
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('data/scores.txt', 'utf-8');
//const dataScores = scores.split('\n')
// dataScores.forEach ((el) => {+el});  

// console.log(dataScores);

function getPadawanNames() {
  const dataPadawans = padawans.split('\n');
  dataPadawans.pop();
 return dataPadawans
}

function getLightsaberScores() {
 const dataScores = scores.split('\n');
 const scoresNum = dataScores.map(function(el){return Number(el)})

 return scoresNum
}

function getStats() {
  const dataPadawans = padawans.split('\n');
  dataPadawans.pop();
  const dataScores = scores.split('\n');
  const scoresNum = dataScores.map(function(el){return Number(el)})
  const stats = []
  
  for (let i = 0; i<dataPadawans.length; i++) {
    const arrCell = []
    arrCell.push(dataPadawans[i])
    arrCell.push(scoresNum[i])
    stats.push(arrCell)
  }
  return stats
}

function writeStats() {
  const stats = getStats().join('\n');
  const fileName = './data/stats.txt'
  fs.writeFileSync(fileName, stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
