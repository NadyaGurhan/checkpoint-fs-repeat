const fs = require('fs')

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  const newScores = []
  for(let i = 0; i <scores.length; i++){
newScores.push(Number(scores[i]))}
  return newScores
}

function getStats() {
  let newArr =[]
  // const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  // const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = getLightsaberScores()
  const padawans = getPadawanNames()
  for(let i =0; i<padawans.length; i++){
   newArr.push([padawans[i], scores[i]]);
  }
  return newArr;
}


function writeStats() {
  const getStat = getStats().join('\n').replace(/,/g," ")
const newFile = './data/stats.txt';
fs.writeFileSync(newFile, `${getStat}`);

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};