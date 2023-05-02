const fs = require('fs');
const { join } = require('path')

function getPadawanNames() {
return (fs.readFileSync("./data/padawans.txt", "utf8").trim().split('\n'))


}
console.log(getPadawanNames());


module.exports = {
	getPadawanNames,
	// getLightsaberScores,
	// getStats,
	// writeStats,
};



// const randomProfile = require('random-profile-generator');
// const fs = require('fs');

// function getRandomInteger() {
// 	return Math.floor(Math.random() * (20 - 1 + 1) + 1);
// }

// function generateNames(num = process.argv[2]) { // генерируем имена
// 	if (!num) { // если не нум
// 		num = getRandomInteger();// то генерируем рандомное число
// 	}
// 	const arr = [];
// 	for (let i = 0; i < num; i += 1) {
// 		arr.push(randomProfile.name());
// 	}
// 	return arr;
// }
// const names = generateNames();
// //--------------------------------------------------//
// fs.mkdir('results', err => {});

// function writeResults(arrPerson) {
// 	const num = arrPerson.length;
// 	let strPersons = '';
// 	for (let i = 0; i < arrPerson.length; i += 1) {
// 		strPersons += `${arrPerson[i]}\n`;
// 	}
// 	fs.writeFileSync(`./results/${num}-name.txt`, `${strPersons}`);
// }
// const person = generateNames(process.argv[2]);
// writeResults(person);
// //-----------------------------------------------//

// module.exports = { // переносим функции в другой файл
// 	writeResults: writeResults,
// 	generateNames: generateNames,
// };