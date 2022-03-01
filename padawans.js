const fs = require('fs')

function getPadawanNames() {
	const padawansList = fs
		.readFileSync('./data/padawans.txt', 'utf-8')
		.split('\n')
	padawansList.pop()
	return padawansList
}


module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
}
