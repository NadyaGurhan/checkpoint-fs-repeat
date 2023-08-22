const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf8')
    .split('\n')
    .slice(0, -1);
    // console.log(read)
  return read;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf8')
    .split('\n');
  // console.log(read)
  return read.map(Number);
}

function getStats() {
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  console.log(result)
  return result;
}

function writeStats() {
  const str = getStats().map(el=> el.join(' '));
  console.log(str)
  const write = fs.writeFileSync('data/stats.txt', str.join('\n'), 'utf8')
  return write;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
