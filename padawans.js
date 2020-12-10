const fs = require('fs');

function getPadawanNames() {
  let getListPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return getListPadawan.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  let getlight = fs.readFileSync('./data/scores.txt', 'utf-8');
  let scores = getlight.split('\n');
  return scores.map((el) => Number(el));
}

function getStats() {
  let padawanArray = getPadawanNames();
  let scoresArray = getLightsaberScores();
  let result = [];
  for (let i = 0; i < 4; i++) {
    result.push([padawanArray[i], scoresArray[i]]);
  }
  return result;
}

function writeStats(stat) {
  fs.writeFileSync(
    './data/stats.txt',
    stat.map((el) => el.join(' ')).join('\n')
  );

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
