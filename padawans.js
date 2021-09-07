const fs = require('fs');
let padawanstxt = fs.readFileSync('./data/padawans.txt', 'utf8');
let scorestxt = fs.readFileSync('./data/scores.txt', 'utf8');

padawanstxt = padawanstxt.replace(/\n/g, ', ');
const padawans = padawanstxt.split(', ');
padawans.splice(-1,1)

function getPadawanNames() {
	return padawans;
}

scorestxt = scorestxt.replace(/\n/g, ', ');
const scores = scorestxt.split(', ');
for (let i = 0; i<scores.length; i++) {
	scores[i] = Number(scores[i]);
}

function getLightsaberScores() {
	return scores;
}

function getStats() {
	return 5;
}

function writeStats() {
	return 5;
}

	module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
