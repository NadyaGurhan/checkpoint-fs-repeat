const padawan = require('./data/padawans.txt');
const score = require('./data/score.txt');

function getPadawanNames(name) {
  let namesArr = [];

  for (let i = 0; i < name.length; i += 1) {
    namesArr.push(padawan.names());
  }
  return namesArr;

}

getPadawanNames();

function getLightsaberScores(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(score());
  }
  return result;
}
getLightsaberScores();

function getStats() {
  return
}
getStats();

function writeStats() {
  return fs.readFileSync('data/stats.txt', 'utf8');
}
writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
