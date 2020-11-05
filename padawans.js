const fs = require('fs');
// const getPadawanNames = require('./data/padawans.txt')
// const getLightsaberScores = require('./data/score.txt')

function getPadawanNames(padToFile) {
  let padavan = fs.readFileSync(padToFile, 'utf-8').trim().split('\n');
  return padavan;
}

function getLightsaberScores(names) {
  let score = fs.readFileSync(names, 'utf-8');
  score = score.map((el) => el + 0);
  return score;
}

function getStats(tableToFile) {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

// write(writeStats){
//   let score = fs.writeFileSync('./data/stats.txt', 'utf8')

// }

// class
//   parse()
//   let
//   fs.readFileSync()

// нужно собрать статистику о падаванах
// getPadawanNames должен возвращать список падаванов из файла
// getLightsaberScores должен возвращать оценки
// getStats возвращает таблицу имени и оценки
// writeStats записывает таблицу в файл
