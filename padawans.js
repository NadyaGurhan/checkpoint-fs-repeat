const fs = require('fs');
const { transferableAbortSignal } = require('util');
const padavans = fs
  .readFileSync(
    '/Users/maksim.brataev/Desktop/phase_1/checkpoint-fs/data/padawans.txt',
    'utf-8'
  )
  .split('\n')
  .slice(0, -1);

function getPadawanNames() {
  return padavans;
}

const scores = fs
  .readFileSync(
    '/Users/maksim.brataev/Desktop/phase_1/checkpoint-fs/data/scores.txt',
    'utf-8'
  )
  .split('\n');
function getLightsaberScores() {
  return scores.map((elem) => Number(elem));
}

function getStats() {
  const table = [];
  for (let i = 0; i < padavans.length; i++) {
    const padavan = [];
    padavan.push(padavans[i], Number(scores[i]));
    table.push(padavan);
  }
  return table;
}

function writeStats() {
  const data = getStats()
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
