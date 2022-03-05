const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const arrayScores = [];
  for (let i = 0; i < lightsaberScores.length; i += 1) {
    arrayScores.push(Number(lightsaberScores[i]));
  }
  return arrayScores;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const stats = [];
  for (let i = 0; i < lightsaberScores.length; i += 1) {
    const array = [padawans[i], Number(lightsaberScores[i])];
    stats.push(array);
  }
  return stats;
}

function writeStats() {
  const statsFile = './data/stats.txt';
  const array = getStats();

  fs.writeFileSync(statsFile, '');

  array.forEach((stats) => {
    const elementStats = stats.join(' ');
    if (array.indexOf(stats) === array.length - 1) {
      fs.appendFileSync(statsFile, `${elementStats}`);
      return;
    }
    fs.appendFileSync(statsFile, `${elementStats}\n`);
  });
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
