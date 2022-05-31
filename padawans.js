const fs = require('fs');

function getPadawanNames() {
	const data = fs.readFileSync('data/padawans.txt', 'utf8');
	let arr = data.split('\n');
	arr.pop();
	console.log(arr);
	//return arr;

}
//console.log(getPadawanNames());

function getLightsaberScores() {
	const data = fs.readFileSync('data/scores.txt', 'utf8');
	const arr = data.split('\n');
	return arr
}
console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};
