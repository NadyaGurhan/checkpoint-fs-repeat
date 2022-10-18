const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4);
  return names;
}

function getLightsaberScores() {
  const mass = [];
  const sabers = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < sabers.length; i++) {
    mass.push(+sabers[i]);
  }
  return mass;
}

function getStats() {
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  const finalStats = [];
  for (let i = 0; i < names.length; i++) {
    const stats = [];
    stats.push(names[i], scores[i]);
    finalStats.push(stats);
  }
  return finalStats;
}
console.log(getStats());

function writeStats() {
  const mass = getStats();
  const newMass = [];
  for (let i = 0; i < mass.length; i++) {
    newMass.push(mass[i].join(','));
    console.log(mass[i])
  }
  console.log(newMass);
  const str = newMass.join('\n');
  fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
