const fs = require('fs')

module.exports = {
  getPadawanNames,

  getStats,
  writeStats,
};

// 'getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'

function getPadawanNames() {
  let fileContentnNames = fs.readFileSync('./checkpoint-fs/data/padawans.txt', 'utf8');
  return fileContentnNames;
}
console.log(getPadawanNames())

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt`

function getPadawanScores() {
  let fileContentScores = fs.readFileSync('./checkpoint-fs/data/scores.txt', 'utf8');
  return fileContentScores;
}
console.log(getPadawanScores())

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом

const PadawanNamesArr = getPadawanNames();
const PadawanScoresArr = getPadawanScores();

function getStats () {
  const getStatsObj = {};
  for (let i = 0; i < PadawanNamesArr.length; i++){
    getStatsObj[PadawanNamesArr[i]] = PadawanScoresArr[i] 
  }
  return getStatsObj
}

console.log(getStats ())

// writeStats сохраняет статистику в файл `data/stats.txt

function writeStats () {

}