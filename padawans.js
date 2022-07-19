const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const getPN = padawans.split('\n').slice(0,4);
const getLS = scores.split('\n').map((sc)=>+sc);

function getPadawanNames() {
return getPN
}

function getLightsaberScores() {
  return getLS
}

function getStats() {
  const arr=[]
  for (let i=0; i<getPN.length; i++){
   arr.push([getPN[i], getLS[i]])
  }
  return arr;
}

function writeStats() {
  const wSt = './data/stats.txt'
  return fs.writeFileSync(wSt, `${getStats().join(' \n')}`)

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
