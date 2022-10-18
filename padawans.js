const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, { encoding: 'utf8' });

function getPadawanNames() {
  const result = padawans.split('\n').slice(0, -1);
  return result;
}

// console.log(getPadawanNames());

const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, { encoding: 'utf8' });

function getLightsaberScores() {
  const result = scores.split('\n').map((el) => Number(el));
  return result;
}

// console.log(getLightsaberScores());

function getStats() {
  const padawansRes = getPadawanNames();
  const scoresRes = getLightsaberScores();
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < padawansRes.length; i++) {
    result.push([padawansRes[i], scoresRes[i]]);
  }
  return result;
}

// console.log(getStats());

function writeStats() {
  const result = getStats().map((el) => el.join(' '));
  return fs.writeFileSync('./data/stats.txt', result.join('\n'));
}

// console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
