module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').slice(0, -1);
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8');
  return score.split('\n').map((el) => +el);
}
console.log(getLightsaberScores());
