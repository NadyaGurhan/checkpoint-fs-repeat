const fs = require('fs');

const getPadawanNames = () => (fs.readFileSync('./data/padawans.txt', 'utf-8')).trim().split('\n');

// it('getPadawanNames возвращает список падаванов из файла `data/padawans.txt`', () => {
const getLightsaberScores = () => (fs.readFileSync('./data/scores.txt', 'utf-8')).split('\n').map((el) => Number(el));
const getStats = () => getPadawanNames().map((el, i) => [el, getLightsaberScores()[i]]);
const writeStats = () => fs.writeFileSync('./data/stats.txt', getStats().join('\n').replaceAll(',', ' '), 'utf-8');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
