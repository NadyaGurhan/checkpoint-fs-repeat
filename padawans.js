const fs = require('fs');

function getPadawanNames() {
  const readString = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrayNames = readString.split('\n');
  arrayNames.pop();
  return arrayNames;
}

function getLightsaberScores() {
  const readString = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = readString.split('\n').map((it) => Number(it));
  return scores;
}

function getStats() {
  const resultReport = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  names.forEach((it, index) => resultReport.push([it, Number(scores[index])]));
  console.log(resultReport);
  return resultReport;
}

function writeStats() {
  let resultReport = '';
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  names.forEach((it, index) => {
    if (index !== names.length - 1) {
      resultReport += `${it} ${scores[index]}\n`;
    } else {
      resultReport += `${it} ${scores[index]}`;
    }
  });
  fs.writeFileSync('./data/stats.txt', resultReport);
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
