const fs = require('fs');

const padawansNamesArr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').filter(item => item !== '');
const scoresArr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

let statsArr = padawansNamesArr.map(item => item.split(','));

  for (let i = 0; i < statsArr.length; i++) {
    statsArr[i].push(Number(scoresArr[i]));
  }

  for (let i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = Number(scoresArr[i]);
    
  }

fs.writeFileSync('data/stats.txt', '');



function getPadawanNames() {

  return padawansNamesArr
}

function getLightsaberScores() {

  return scoresArr
}

function getStats() {

  return statsArr;

}

function writeStats() {

  for (let i = 0; i < statsArr.length; i++) {
    statsArr[i] = String(statsArr[i].join(' '))
  }

  for (let i = 0; i < statsArr.length - 1; i++) {
    fs.appendFileSync('data/stats.txt', `${statsArr[i]}\n`);
  }

  fs.appendFileSync('data/stats.txt', `${statsArr[statsArr.length - 1]}`);

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
