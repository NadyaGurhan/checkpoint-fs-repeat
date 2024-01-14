const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n');
const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map((element) => parseFloat(element, 10));
const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const list = [];
  padawans.forEach((padawan, num) => { list.push([padawan, scores[num]]); });
  return list;
};
const writeStats = () => {
  const stats = getStats();
  console.log(stats);
  console.log(stats.join('\n'));
  fs.writeFileSync('./data/stats.txt', '');
  getPadawanNames().forEach((name, index) => {
    index === (getPadawanNames().length - 1)
      ? fs.appendFileSync('./data/stats.txt', `${name}` + ` ${getLightsaberScores()[index]}`)
      : fs.appendFileSync('./data/stats.txt', `${name}` + ` ${getLightsaberScores()[index]}\n`);
  });
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
