const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8').trim('').split('\r\n');
const padawansScores = fs.readFileSync('./data/scores.txt', 'utf8').trim('').split('\r\n');
function getPadawanNames() {//возвращает список падаванов из файла 'data/padawans.txt'
  return padawansList
}

function getLightsaberScores() { //возвращает оценки владения световым мечом из файла `data/scores.txt`
  const scores = padawansScores.map(Number);
  return scores
}

function getStats() { //возвращает таблицу соответствия падавана и оценки владения световым мечом
  const scores = padawansScores.map(Number);
  const lightsaberScores = padawansList.map((name, i) => ([name, scores[i]]));
  return lightsaberScores
}

function writeStats() { //сохраняет статистику в файл `data/stats.txt`
  const scores = padawansScores.map(Number);
  const lightsaberScores = padawansList.map((name, i) => `${name} ${scores[i]}`);
  const scoresNewString = lightsaberScores.join('\n');
  const statisticWriter = fs.appendFileSync('./data/stats.txt', scoresNewString)
}