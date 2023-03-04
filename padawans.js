const fs = require('fs');

function getPadawanNames() {
  // хочу получить строки из текста
  const padawan = fs.readFileSync('data/padawans.txt', 'utf8');
  // судя по с тестам у меня не получается разбить как нужно
  // и положить в массив
  const arr = padawan.split('\n');
  return arr;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  // то же самое
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  const arr = scores.split('\n').map((el) => Number(el));
  return arr;
}
console.log(getLightsaberScores());

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = names.map((elem, i) => [elem, scores[i]]);
  return arr;
  // нужно объединить оба результата
}
console.log(getStats());

function writeStats() {
  // сохранить статистику в файл
  const result = fs.writeFileSync('data/stats.txt', getStats().join('\n').split(',').join(' '),'utf8');
  return result;
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
