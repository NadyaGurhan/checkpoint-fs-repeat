function getPadawanNames() {
  const fs = require('fs');
  const dataFromFile = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  for (let index = 0; index < dataFromFile.length; index += 1) {
    const element = dataFromFile[index];
    if (element === '') {
      dataFromFile.splice(index);
    }
  }
  return dataFromFile;
}

function getLightsaberScores() {
  const fs = require('fs');
  const dataFromFile = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return dataFromFile.map((element) => Number(element));
}
function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  let result = [];

  for (let index = 0; index < padawanNames.length; index++) {
    const padawan = padawanNames[index];
    const score = lightsaberScores[index];
    result.push([padawan, score]);
  }

  return result;

}
function writeStats() {
  const fs = require('fs');
  const stats = getStats();
  let result = [];
  for (let index = 0; index < stats.length; index++) {
    result.push(stats[index].join(' '));
  }
  fs.writeFileSync('./data/stats.txt', result.join('\n'));
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
