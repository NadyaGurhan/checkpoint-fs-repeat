const fs = require('fs');

function getPadawanNames() {
  const padavan = fs.readFileSync('data/padawans.txt', 'utf8');

  return padavan.split('\n').filter((e) => e !== '');
  // if() padavan.split('\n');
}

function getLightsaberScores() {
  const Lightsaber = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  const result = Lightsaber.filter((e) => e !== '').map((element) => +element);
  // split('\n').filter((e) => e !== '');
  return result;
}

function getStats() {
  const Lightsaber = getLightsaberScores();
  const padavan = getPadawanNames();
  const result = [];

  for (let j = 0; j < padavan.length; j++) {
    result.push([padavan[j], (Lightsaber[j])]);
  }
  fs.writeFileSync('data/stats.txt', result.join(','));
  return result;
}

function writeStats() {
  const stat = getStats();
  result = stat.map((el) => el.join(' ')).join('\n').toString();
  fs.writeFileSync('data/stats.txt', result);
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const test = writeStats();

console.log(test);
