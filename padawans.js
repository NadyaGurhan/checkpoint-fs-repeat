const fs = require("fs");

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};

const getPadawanNames = () => {
	fs.readFileSync("./data/padawans.txt", "utf8");
};

const getLightsaberScores = () => {
	fs.readFileSync("./data/scores.txt", "utf8");
};

const getStats = () => {
	const names = fs.readFileSync("./data/padawans.txt", "utf8");
	const values = fs.readFileSync("./data/scores.txt", "utf8");
	names.push(values);
	// забыл каким методом нам надо сложить в 1 массив результаты 2-х наших таблиц
};

const writeStats = () => {
	const data = fs.readFileSync("data/stats.txt", "utf8");
	getStats();
	// что то там надо сделать .join('\n')
};
