const fs = require('fs');
// 'getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'
function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.trim().split('\n');
}

console.log(getPadawanNames());

//'getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt`

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map((el) => +el);
}

console.log(getLightsaberScores());

//'getStats возвращает таблицу соответствия падавана и оценки владения световым мечом'

function getStats() {
  return getPadawanNames().map((name, i) => [name, getLightsaberScores()[i]]);
}

console.log(getStats());

// 'writeStats сохраняет статистику в файл `data/stats.txt`'
function writeStats() {
  fs.writeFileSync(
    'data/stats.txt',
    getStats()
      .map((el) => el.join(',').split(',').join(' '))
      .join('\n'),
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
