const fs = require('fs');

const getPadawanNames = () => {
	const str = fs.readFileSync('./data/padawans.txt', 'utf8');
	const arrName = str.split('\r\n');
	return arrName;
};

const getLightsaberScores = () => {
	const sco = fs.readFileSync('./data/scores.txt', 'utf8');
	const arrScore = sco.split('\r\n').map(Number);
	return arrScore;
};

const getStats = () => {
	const arr = getPadawanNames();
	const arr2 = getLightsaberScores();
	return arr.map((el, i) => [el, arr2[i]]);
};

const writeStats = () => {
	const result = getStats().join('\n');
	const writhe = fs.writeFileSync('./data/stats.txt', result, 'utf-8');
	return writhe;
};
writeStats();

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
