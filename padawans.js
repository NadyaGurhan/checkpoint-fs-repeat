const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// возвращает список падаванов из файла `data/padawans.txt

function getPadawanNames() {
  const a = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const b = a.split('\n');
  return b;
}
getPadawanNames();

// возвращает оценки владения световым мечом из файла `data/scores.txt

function getLightsaberScores() {
  const a = fs.readFileSync('./data/scores.txt', 'utf-8');
  let newStr = '';
  for (let i = 0; i < a.length; i += 1) {
    newStr += a[i];
  }
  return newStr;
}
getLightsaberScores();

// возвращает таблицу соответствия падавана и оценки владения световым мечом'

function getStats() {
  const a = fs.readFileSync('./data/scores.txt', 'utf-8');
  const b = fs.readFileSync('./data/scores.txt', 'utf-8');
  let newArr = [];
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < b.length; j += j) {
      newArr += a[i] + b[i];
    }
  }
  return newArr;
}

getStats();

// сохраняет статистику в файл `data/stats.txt
