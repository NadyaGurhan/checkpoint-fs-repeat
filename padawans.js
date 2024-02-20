const fs = require('fs');
const path = require('path');

const padawansFile = () => {
  const readResult = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf8',
  );
  return readResult;
};

const scoreFile = () => {
  const readResult = fs.readFileSync(
    path.join(__dirname, './data/scores.txt'),
    'utf8',
  );
  return readResult;
};

function getPadawanNames() {
  const padawansFileContent = padawansFile();
  const padawans = padawansFileContent
    .split('\n')
    .filter((line) => line !== '');
  return padawans;
}

function getLightsaberScores() {
  const scoresFileContent = scoreFile();
  const scores = scoresFileContent
    .split('\n')
    .filter((line) => line !== '')
    .map((line) => parseFloat(line));
  return scores;
}

const padawans = getPadawanNames();
const scores = getLightsaberScores();

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

const stats = getStats();

const writeFile = (data) => {
  const fileName = `stats.txt`;
  const filePath = path.join(__dirname, 'data', fileName);

  fs.writeFileSync(
    filePath,
    data.join('\n'),
    'utf8',
  );
};

function writeStats(stats) {
  const data = stats.map((stat) => `${stat[0]} ${stat[1]}`);
  writeFile(data);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
