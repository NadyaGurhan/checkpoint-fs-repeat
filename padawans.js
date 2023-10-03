const fs = require('fs')
module.exports = {
  getPadawanNames() {
    const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8');
    return padawanNames.split(' ');
  },
  getLightsaberScores() {
    return fs.readFileSync('./data/score.txt', 'utf8');
  },
  getStats,
  writeStats,
};
