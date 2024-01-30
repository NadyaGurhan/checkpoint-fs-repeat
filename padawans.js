const fs = require('fs');

const getPadawanNames = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const arr = padawans.split('\n');
  const result = [];
  arr.forEach((i) => {
    if (i !== '') result.push(i);
  });

  return result;
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = scores.split('\n');
  const result = [];

  arr.forEach((i) => {
    if (i !== '') result.push(Number(i));
  });

  return result;
};

const getStats = () => {
  const padawans = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], lightsaberScores[i]]);
  }

  return result;
};

const writeStats = () => {
  const arr = getStats();

  fs.writeFileSync('./data/stats.txt', arr.join('\n'));
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
