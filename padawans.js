const fs = require('fs');

function getPadawanNames() {
  const filePath = './data/padawans.txt';
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const names = fileContent.split('\n');
    return names;
  } catch (error) {
    console.error('Ошибка чтения', error);
    return [];
  }
}
function getLightsaberScores() {
  const filePath = './data/padawans.txt';

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const scores = fileContent.split('\n').map(parseFloat);
    return scores;
  } catch (error) {
    console.error('Ошибка чтения', error);
    return [];
  }
}
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const stats = names.map((name, index) => [name, scores[index]]);
  return stats;
}

function writeStats(stats) {
  const filePath = './data/stats.txt';

  try {
    const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
    fs.writeFileSync(filePath, data, 'utf-8');
    console.log('Статистика успешно сохранена в файл:', filePath);
  } catch (error) {
    console.error('Ошибка записи:', error);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
