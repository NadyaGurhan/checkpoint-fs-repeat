const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const textToArray = names.split('\n');
  textToArray.pop(); // убираем пустую строку
  return textToArray;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const textToArray = scores.split('\n');
  return textToArray.map((el) => Number(el)); // преобразуем строку в число
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < names.length; i += 1) {
    arr.push([names[i], scores[i]]);
  }
  return arr;
}

function writeStats() {
  const stats = getStats().join('\n').split(',').join(' ');
  const data = fs.writeFileSync('data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
