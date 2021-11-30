const fs = require('fs');

function getPadawanNames() {
  const mass = fs.readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n');
  mass.pop();
  return mass;
}

function getLightsaberScores() {
  const mass = fs.readFileSync('./data/scores.txt', 'utf-8').toString().split('\n');
  return mass.map(a => +a);
}

function getStats() {
  const mass = [];
  const padawansNames = getPadawanNames();
  const LightsaberScores = getLightsaberScores();
  for (let i = 0; i < padawansNames.length; i++) {
    const newMass = [];
    newMass.push(padawansNames[i]);
    newMass.push(LightsaberScores[i]);
    mass.push(newMass);
  }
  for (let user of mass) {
    fs.appendFileSync('./data/stats.txt', `${user}\n`);
  }
  return mass;
}

function writeStats() {
  const stats = getStats();
  const statsString = stats.map(a => a.toString());
  for (let user of statsString) {
    fs.appendFileSync('./data/stats.txt', `${user}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
