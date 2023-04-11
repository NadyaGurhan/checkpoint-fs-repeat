const fs = require('fs');

const padawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
  .split('\n')
  .slice(0, 4)
  .map((item) => item.split(', '));

const scores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')
  .split('\n')
  .map((item) => item.split(', '));

function getPadawanNames() {
  const names = padawans.map((el) => el.join(', '));
  return names;
}

function getLightsaberScores() {
  const score = scores.map((el) => +el.join(', '));
  return score;
}

function getStats() {
  let result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    padawans[i].push(+scores[i].join(', '));
    result = padawans;
  }
  return padawans;
}

function writeStats() {
  const result = getStats();
  // fs.writeFileSync('./data/stats.txt', result.join('\n'), 'utf8');
  const testing = result.join(', ');
  const testing2 = testing.replace(/,/g, '').split(' ');
  return testing2;
}

console.log(writeStats());

// fs.writeFileSync(
//   './data/stats.txt',
//   `${}.join('\n')}`,
//   'utf8'
// );

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
