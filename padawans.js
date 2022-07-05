const fs = require('fs')
const padavansList = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').filter(padawan => padawan !== '');
console.log(padavansList);
const scoreOfKnife = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map(Number);
console.log(scoreOfKnife);
function getPadawanNames() {
	return padavansList;
}

function getLightsaberScores() {
	return scoreOfKnife
}

function getStats() {
	const concatPadawan = padavansList.concat(scoreOfKnife)
	console.log(concatPadawan);
}
function writeStats() {
	const dataStats = fs.writeFileSync('data/stats.txt', getStats().toString(), 'utf-8');
	return dataStats
}


module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
