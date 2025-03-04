const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

// Функция 1: возвращает список падаванов из файла
// название и расширение создаваемого файла + путь
const fileName = './data/padawans.txt';

// чтение файла с диска в указанной кодировке
const padawans = fs.readFileSync(fileName, 'utf-8').split('\n');
// console.log(padawans);

function getPadawanNames() {
  return padawans.map(name => name.trim()).filter(name => name.length > 0);
}

// Функция 2: возвращает оценки владения световым мечом
// название и расширение создаваемого файла + путь
const data = './data/scores.txt';

// чтение файла с диска в указанной кодировке
const scores = fs.readFileSync(data, 'utf-8').split('\n');
// console.log(scores);

function getLightsaberScores() {
  return scores.map(score => parseFloat(score.trim()));
}

