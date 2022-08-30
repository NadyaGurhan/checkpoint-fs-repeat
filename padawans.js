const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  delete padawans[4];
  return padawans;
}

function getLightsaberScores() {
  const padawansScores = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < padawansScores.length; i += 1) {
    padawansScores[i] = Number(padawansScores[i]);
  }
  return padawansScores;
}

function getStats() {
	let arrayStats = [];
  for (let i = 0; i < 4; i += 1) {
    arrayStats.push(getPadawanNames());
    arrayStats.push(getLightsaberScores());
		for (let j = 0; j < arrayStats.length; j += 1) {
			delete arrayStats[i][j];
		}
	}
	return arrayStats;
}
getStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
