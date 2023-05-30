const fs = require('fs');

const getPadawanNames = () => {
	const text = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
	return text.trim().split('\n');
};

const getLightsaberScores = () => {
	const text = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
	const padSkill = text
		.trim()
		.split('\n')
		.map(el => +el);
	return padSkill;
};

const getStats = () => {
	const text = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
	const skill = getPadawanNames();
	const padSkill = text
		.trim()
		.split('\n')
		.map((el, i) => [skill[i] + ' ' + parseFloat(el)]); // не додела, не совсем понял как сделать.
	console.log(padSkill);

	return padSkill;
};

const writeStats = () => {};

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	getStats,
	writeStats,
};
