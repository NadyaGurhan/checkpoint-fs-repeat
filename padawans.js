const fs = require('fs')

function getPadawanNames() {
  const dateName = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = dateName.split('\n').filter(Boolean).map((el) => el.trim());
  return names;
}
function getLightsaberScores() {
  const dateScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scor = dateScores.split('\n').map((el) => Number(el))
  return scor

}
function getStats() {
  const dateName = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const dateScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return dateName.map((name, index) => {
    const scor = dateScores[index];
    if (scor) {
      return [name.trim(), Number(scor.trim())]

    } else {
      return null;
    }
  }).filter((item) => item !== null)

}
function writeStats(stats) {

  const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync('data/stats.txt', data, 'utf8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
