const fs = require('fs')

const getPadawanNames = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8')
  const arrOfNames = names.trim().split('\n');
  return arrOfNames;
}
const getLightsaberScores = () => {
  const exportScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrOfNumbers = exportScores.split('\n').map(el => +el);
  return arrOfNumbers;
}

const getStats = () => {
  let personScore = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (i === j) {
        personScore.push([names[i], Number(scores[j])]);
      }
    }
  }
  return personScore;
}

const writeStats = () => {
  const personScore = getStats();
  const statsFile = fs.writeFileSync('./data/stats.txt', personScore.join('\n').replace(/,/g, ' '), 'utf8');
  return statsFile;
}


console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
