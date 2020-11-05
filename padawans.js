const fs = require('fs');

function getPadawanNames(padToFile) {
  let padavan = fs.readFileSync(padToFile, 'utf-8').trim().split('\n');
  return padavan;
}
function getLightsaberScores(scoreToFile) {
  let score = fs.readFileSync(scoreToFile, 'utf-8');
  scores = score.split('\n').map((el) => +el);
  return scores;
}
function getStats() {
  let newScore = [];
  let padavan = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .trim()
    .split('\n');
  let score = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores = score.split('\n').map((el) => +el);
  console.log(score);
  for (let i = 0; i < padavan.length; i++) {
    newScore.push([padavan[i], scores[i]]);
  }
  return newScore;
}
function writeStats() {
  let newStats = getStats();
  let newScoreStats = fs.writeFileSync;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// class
//   parse()
//   let
//   fs.readFileSync()

// нужно собрать статистику о падаванах
// getPadawanNames должен возвращать список падаванов из файла
// getLightsaberScores должен возвращать оценки
// getStats возвращает таблицу имени и оценки
// writeStats записывает таблицу в файл
