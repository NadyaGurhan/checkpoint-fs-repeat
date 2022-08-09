const fs = require('fs');

const padavans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(item => item !== '');
const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').filter(item => item !== '');

function getPadawanNames() {
	return padavans;
}

function getLightsaberScores() {
	return score.map(el => +el);
}

function getStats() {
	const results = padavans.map((item, index) => [item, +score[index]]); 
	return results;
}

function writeStats() {
	const resultsForTxt = getStats().map(el => el.join(' ')).join('\n');
	fs.writeFileSync('./data/stats.txt', `${resultsForTxt}`);
}

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
