const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

const getPadawanNames = () => padawans.slice(0, -1);

const getLightsaberScores = () => scores.map(Number);

const getStats = () => {
//  const padawanNames = getPadawanNames();
//  const LightsaberScores = getLightsaberScores();
//  const stats = [];
//  for (let i = 0, i<padawanNames.length; i++ ) {
//    stats.push([padawanNames[i]]);
//  }
//  for (let i = 0, i < LightsaberScores.length; i++ ) {
//   stats.push([LightsaberScores[i]]);
// };
// return stats;
}

const writeStats = () => fs.writeFileSync('./data/stats.txt', `${getStats().map((el) => el.join('')).join('\n')}`);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
