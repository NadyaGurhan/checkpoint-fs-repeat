const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');

const getLightsaberScores = () => {
  const data = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');
  return data.map((elem) => +elem);
};

const getStats = () => {
  const padawansData = getPadawanNames();
  const scoresData = getLightsaberScores();

  const result = [];
  for (let i = 0; i < padawansData.length; i += 1) {
    result.push([padawansData[i], scoresData[i]]);
  }

  return result;
};

const writeStats = () => {
  const statData = getStats();
  const result = statData.map((elem) => `${elem[0]} ${elem[1]}`);

  fs.writeFileSync('data/stats.txt', result.join('\n'));
};

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
