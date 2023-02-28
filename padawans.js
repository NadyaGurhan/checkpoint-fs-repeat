const fs = require('fs');

function getPadawanNames() {
  // хочу получить строки из текста
  const padawan = fs.readFileSync('data/padawans.txt', 'utf8');
  console.log(padawan);
  // судя по с тестам у меня не получается разбить как нужно
  // и положить в массив
  const arr = padawan.split(' ');
  return arr;
}

function getLightsaberScores() {
  // то же самое
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  const arr = scores.split(' ');
  return arr;
}

function getStats() {
  // нужно объединить оба результата
  return 
}

function writeStats() {
  // сохранить статистику в файл
  const result = fs.writeFileSync('data/stats.txt', getStats.join(''), 'utf8');
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
