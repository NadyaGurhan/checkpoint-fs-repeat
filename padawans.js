const fs = require('fs');
const { console } = require('inspector');
const { EOL } = require('os');

function getPadawanNames() {
  const filePadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrPadawans = filePadawans.split(EOL).slice(0, 4);
  return arrPadawans;
}

function getLightsaberScores() {
  const fileScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrScores = fileScores.split(EOL);
  return arrScores.map((el) => Number(el));
}

const padawanNames=getPadawanNames();
const scores= getLightsaberScores();

function getStats() {
  const resultArr = [];
  for (let i=0; i<padawanNames.length; i++) {
    resultArr.push([padawanNames[i], scores[i]])
  }
  return resultArr
}

function writeStats() {
  const stats = getStats();
  let str='';
  for (let i=0; i<stats.length; i++) {
    for (let j=0; j<stats[i].length; j++) {
      str+=stats[i][j];
    }
    str+=EOL;
  }
 return fs.appendFileSync(`data/stats.txt`, str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
