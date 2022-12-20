const fs = require('fs');

function getPadawanNames() {
  const fileread = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return fileread;
}
function getLightsaberScores() {
  const fileread = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  return fileread.map((e) => +e);
}
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  console.log(padawans, scores);
  const result = [];

  for (let i = 0; i < scores.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}
function writeStats() {
  const dirname = './data';
  const filepath = `${dirname}/stats.txt`;
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
  const records = getStats();
  const result = [];

  for (let i = 0; i < records.length; i += 1) {
    result.push(records[i].join(' '));
  }

  fs.writeFileSync(filepath, result.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
