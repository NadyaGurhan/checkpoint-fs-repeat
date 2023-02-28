const fs = require('fs');

const padawansNames = ['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani'];

function getPadawanNames() {
  return padawansNames;
}

const padawansScores = [99.9, 92, 87, 82];

function getLightsaberScores() {
  return padawansScores;
}

function getStats() {
  const result = [];
  for (let index = 0; index < padawansNames.length; index += 1) {
    const newArr = [padawansNames[index], padawansScores[index]];
    result.push(newArr);
  }
  return result;
}

function writeStats() {
  for (let index = 0; index < padawansNames.length; index += 1) {
    if (index !== padawansNames.length - 1) {
      const row = `${padawansNames[index]} ${padawansScores[index]}\n`;
      fs.appendFileSync('./data/stats.txt', row, 'utf-8');
    } else if (index === padawansNames.length - 1) {
      const row = `${padawansNames[index]} ${padawansScores[index]}`;
      fs.appendFileSync('./data/stats.txt', row, 'utf-8');
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
