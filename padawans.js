const fs = require('fs')

const getPadawanNames = () => {
  return fs.readFileSync(`data/padawans.txt`, 'utf-8').trim().split('\n');
}

const getLightsaberScores = () => {
  const read = fs.readFileSync(`data/scores.txt`, 'utf-8');
  return read.split('\n').map((el) => Number(el));
}

getStats = () => {
  const array = [];
  const padawans = getPadawanNames();
  const stats = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    array.push([padawans[i], Number(stats[i])]);
  }
return array;

}

writeStats = () => {
  fs.writeFileSync(`data/stats.txt`, getStats().join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
