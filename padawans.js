const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const padawans = [];
  const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = padawansNames.trim().split(EOL);
  for (let i = 0; i < names.length; i++) {
    padawans.push(names[i]);
  }
  return padawans;
}
getPadawanNames();

function getLightsaberScores() {
  const result = [];
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
  for (let i = 0; i < scores.length; i++) {
    result.push(+scores[i]);
  }

  return result;
}
getLightsaberScores();

function getStats() {
  const result = [];
  const saber = getLightsaberScores();
  const padawans = getPadawanNames();
  for (let i = 0; i < saber.length; i++) {
    result.push([padawans[i], saber[i]]);
  }
  // console.log(result);
  return result;
  
}

getStats();


function writeStats(arr) {
  let string = '';
  for(let i = 0; i<arr.length; i++){
    string += arr[i].join(' ')+EOL
  }
fs.writeFileSync('./data/stats.txt', string.trim())
}
writeStats([
  [ 'Revan', 99.9 ],
  [ 'Bastila Shan', 92 ],
  [ 'Jolee Bindo', 87 ],
  [ 'Juhani', 82 ]
])

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
