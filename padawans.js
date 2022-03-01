const fs = require('fs')

function getPadawanNames() {
	const padawansList = fs
		.readFileSync('./data/padawans.txt', 'utf-8')
		.split('\n')
	padawansList.pop()
	return padawansList
}

function getLightsaberScores() {
	const scores = fs
		.readFileSync('./data/scores.txt', 'utf-8')
		.split('\n')
		.map(el => Number(el))
	return scores
}

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
}
