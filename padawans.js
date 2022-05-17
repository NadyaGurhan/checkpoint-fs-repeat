const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  const names = data.split('\n');

  return names.slice(0, names.length - 1);
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = data.split('\n');

  return scores.map((score) => Number(score));
}

function getStats() {
  const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const dataScores = fs.readFileSync('./data/scores.txt', 'utf8');

  const names = dataPadawans.split('\n');
  const namesWithoutLastEl = names.slice(0, names.length - 1);
  const scores = dataScores.split('\n');
  const mapedScore = scores.map((score) => Number(score));

  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < namesWithoutLastEl.length; i++) {
    result.push([namesWithoutLastEl[i], mapedScore[i]]);
  }

  return result;
}

function writeStats() {
  const stats = getStats();
  const content = stats.map((el) => el.join(' '));

  fs.appendFileSync('./data/stats.txt', content.join('\n'), (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
