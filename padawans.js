const fs = require('fs')


function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync(
    './data/scores.txt', 
    'utf-8'
    )
    .trim()
    .split('\n')
    .map(score => +score);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  return padawans.reduce((arr, padawan, i) => {
    arr.push([padawan, scores[i]]);
    return arr;
  }, []);
}

function writeStats() {
  const padawansStats = getStats();
  let textNames = ``;

  fs.open(`./data/stats.txt`, 'w', () => {});

  padawansStats.forEach(padawan => {
    textNames += `${padawan.join(' ')}\n`;
  });

  fs.appendFileSync(`./data/stats.txt`, textNames.trim());
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};