const fs = require ('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const finalNames = [];
  for (let i = 0; i < names.length - 1; i += 1){
    finalNames.push(names[i])
  }
  return finalNames;
}

function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => +el);
}

function getStats() {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}
function writeStats(){
  let stats = getStats().map((el) => el.join(' '))
  fs.writeFileSync('data/stats.txt', `${stats.join('\n')}`);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
