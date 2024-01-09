const fs = require('fs');
const path = require('path');

function getPadawanNames() {
	return fs.readFileSync('./data/padawans.txt', 'utf8').trim('').split('\r\n');
}

function getLightsaberScores() {
	return fs
		.readFileSync('./data/scores.txt', 'utf8')
		.trim('')
		.split('\r\n')
		.map(el => Number(el));
}

function getStats() {
	const padawans = getPadawanNames();
	const scores = getLightsaberScores();
	return scores.map((el, i) => [padawans[i], el]);
}

function writeStats() {
	const stats = getStats();

	const data = fs.writeFileSync(
		path.join(__dirname, 'data/stats.txt'),
		stats.join('\n').replaceAll(',', ' '),
		'utf8'
	);

	return data;
}
module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
