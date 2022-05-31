const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
// console.log(scores)
function getPadawanNames() {
	const padawansArr = padawans.split('\n');
	const result = [];
	for (let i = 0; i < padawansArr.length - 1; i++) {
		result.push(padawansArr[i]);
	}
	return result;
}

function getLightsaberScores() {
	const scoresArr = scores.split('\n');
	const result = [];
	for (let i = 0; i < scoresArr.length; i++) {
		result.push(Number(scoresArr[i]));
	}
	console.log(result)
	return result;
}

function getStats() {
	const padawansArr = padawans.split('\n').slice(0, 4);
	const scoresArr = scores.split('\n');
	const result = [];
	for (let i = 0; i < padawansArr.length; i++) {
		result[i] = [];
		result[i].push(padawansArr[i], Number(scoresArr[i]));
	}
	return result;
}

function writeStats() {
	let stats = getStats();
	const result = []
	for (let i = 0; i < stats.length; i++) {
		result.push(stats[i].join(''))
	}
	fs.writeFileSync('./data/stats.txt', ' ', 'utf-8');
	for (let j = 0; j < result.length; j++) {
		if (j == 0) {
			fs.appendFileSync(`./data/stats.txt`, `${result[j]}`, 'utf-8');
		} else {
			fs.appendFileSync(`./data/stats.txt`, `\n${result[j]}`, 'utf-8')
		}
	}
}


module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
