const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawansNames = padawans.split('\n').slice(0, -1);
  return padawansNames;
}

function getLightsaberScores() {
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = LightsaberScores.split('\n').map(Number);
  return scores;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawansNames = padawans.split('\n').slice(0, -1);
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = LightsaberScores.split('\n').map(Number);
  const result = [];
  for (let i = 0; i < padawansNames.length; i += 1) {
    const res = [];
    res.push(padawansNames[i], scores[i]);
    result.push(res);
  }
  return result;
}

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawansNames = padawans.split('\n').slice(0, -1);
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = LightsaberScores.split('\n').map(Number);

  for (let i = 0; i < scores.length; i += 1) {
    fs.appendFileSync('data/stats.txt', `${padawansNames[i]}${scores[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
