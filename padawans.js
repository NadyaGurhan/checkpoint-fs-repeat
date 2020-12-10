const fs = require('fs');

function getPadawanNames () {
	const text = fs.readFileSync('./data/padawans.txt', 'utf-8');
	const names = text.trim().split('\n');
	return names;
} 

function getLightsaberScores () {
	return fs.readFileSync('./data/scores.txt', 'utf-8')
		.trim().split('\n').map(el => +el);
} 

function getStats () {
	const scores = getLightsaberScores();
	const names = getPadawanNames();
	const stats = [];
	names.forEach((name, i) => {stats.push([name, +scores[i]])});
	return stats;
} 

function writeStats () {
	const stats = getStats();
	let formattedStats = '';
	stats.forEach(([name, score]) => formattedStats += `${name} ${score}\n`);
	fs.writeFileSync('./data/stats.txt', formattedStats.trim());
} 

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
