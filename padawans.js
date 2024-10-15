const fs = require('fs');
const { EOL } = require('os');


// console.log(padawans);

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\r\n').slice(0, 4);
  console.log(padawans);
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\r\n')
  const numbArr =  scores.map((el) => Number(el) )
  return numbArr
}


function getStats () {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores()
  const statsArr = [];


for (let i = 0; i < 4; i++) {
  statsArr.push([padawans[i], scores[i]]);
}
return statsArr
}


function  writeStats() {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores()
  const statsArr = [];


for (let i = 0; i < 4; i++) {
  statsArr.push([padawans[i] scores[i]]);
}

statsArr
fs.writeFileSync('data/stats.txt', statsArr.join(EOL));
}


console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
