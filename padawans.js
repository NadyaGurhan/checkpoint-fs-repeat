const fs = require('fs');
const names = fs.readFileSync('.data/padawans.txt', 'utf8');
const scores = fs.readFileSync('.data/scores.txt', 'utf8');

const getPadawanNames = () => {
  return names;
}
console.log(getPadawanNames());

const getLightsaberScores = () => {
  return scores;
}

const getStats = () => {
  const stats = [];

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

const writeStats = () => {
  fs.writeFileSync( `stats.txt`, getStats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
