const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawan = padawans.split('\n');
  // const total = padawan.trim();
  return padawan;
}

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const score = scores.split('\n');
  const scor = score.map(Number);

  // console.log(score);
  return scor;
};

const getStats = () => {
  const res = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    res.push([padawans[i], Number(scores[i])]);
  }
  return res;
};

const writeStats = () => {
  const write = getStats()
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('data/stats.txt', write, 'utf-8');
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
