const fs = require('fs');
function getPadawanNames() {
  const filePath = './data/padawans.txt';
  const padawansData = fs.readFileSync(filePath, 'utf-8');
  const padawans = padawansData.split('\n').slice(0, -1);
  return padawans;
}
function getLightsaberScores() {
  const filePath = './data/scores.txt';
  const scoresData = fs.readFileSync(filePath, 'utf-8');
  const scores = scoresData.split('\n').map((el) => {
    return Number(el);
  });
  return scores;
}
function getStats() {
  const stats = [];
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  for (let i = 0; i < scores.length; i++) {
    const score = [names[i], scores[i]];
    stats.push(score);
  }
  return stats
}
function writeStats() {
  const filePath = './data/stats.txt';
  const text = getStats().join('\n').replaceAll(',',' ');
  fs.writeFileSync(filePath,text);

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
