const fs = require('fs');

function getPadawanNames() {
	let padawansStr = fs.readFileSync('./data/padawans.txt', 'utf8');
	let padawans = padawansStr.split('\n');
	padawans.splice(-1, 1)
	return padawans;
}

// let padawans = getPadawanNames();
// console.log(padawans);

function getLightsaberScores() {
	let scoresStr = fs.readFileSync('./data/scores.txt', 'utf8');
	let scores = scoresStr.split('\n');
	for(let i=0; i<scores.length; i++){
		scores[i] = Number(scores[i]);
	}
	return scores;
}

// let scores = getLightsaberScores();
// console.log(scores);




function getStats() {
	// let padawansStr = fs.readFileSync('./data/padawans.txt', 'utf8');
	// let padawans = padawansStr.split('\n');
	// let scoresStr = fs.readFileSync('./data/scores.txt', 'utf8');
	// let scores = scoresStr.split('\n');
	// for(let i=0; i<scores.length; i++){
	// 	scores[i] = Number(scores[i]);
	// }
	// padawans.splice(-1,1);
	// let stats = [];
	// for(let i=0; i< padawans.length; i++){

	// }
	// return stats

	let padawans = getPadawanNames();
	let scores = getLightsaberScores();
	let stats=[];

	for(let i=0; i<scores.length; i++) {
		stats.push([padawans[i], scores[i]])
	}
	return stats
}

let stats = getStats();
console.log(stats);



function writeStats() {
	let statsArr = getStats();
	statsArr.splice()
	let statsARr=[]
	for(let i=0; i<statsArr.length; i++) {
		statsARr[i] = statsArr[i].join(' ');
	}
	let stats = fs.writeFileSync('./data/stats.txt', statsARr.join('\n'))
	return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
