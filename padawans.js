const { log } = require("console");
const fs = require("fs");

function getPadawanNames() {
	return fs.readFileSync("./data/padawans.txt", "utf8").trim().split("\n");
}

function getLightsaberScores() {
	return fs
		.readFileSync("./data/scores.txt", "utf8")
		.split("\n")
		.map((el) => Number(el));
}

function getStats() {
	let a = fs.readFileSync("./data/padawans.txt", "utf8").trim().split("\n");
	let b = fs
		.readFileSync("./data/scores.txt", "utf8")
		.split("\n")
		.map((el) => Number(el));

	let arr = [];
	for (let i = 0; i < a.length; i++) {
		arr[i] = [a[i], b[i]];
	}
	return arr;
}

function writeStats(arr) {
	fs.writeFileSync("./data/stats.txt", arr.join("\n").replaceAll(",", " "));
}

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
