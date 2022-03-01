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


function getStats() {
	const arr = []
	const padavans = getPadawanNames()
	const scores = getLightsaberScores()
	for (let i = 0; i < padavans.length; i++) {
		let arrMin = []
		arrMin.push(padavans[i], scores[i])
		arr.push(arrMin)
	}
	return arr
}

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
}
