const { log } = require("console");
const fs = require("fs");

let str1 = fs.readFileSync("./data/padawans.txt", "utf8");
let arr1 = str1.split("\n");

let str2 = fs.readFileSync("./data/scores.txt", "utf8");
let arr2 = str2.split("\n");

const getPadawanNames = (arr) => arr;

const getLightsaberScores = (arr) => arr;

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
