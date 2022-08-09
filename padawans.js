const fs = require("fs");

function getPadawanNames() {
  let count = [];
  const str = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  for (let i = 0; i < str.length - 1; i++) count.push(str[i]);
  return count;
}
function getLightsaberScores() {
  let count = [];
  const str = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  for (let i = 0; i < str.length-1; i++) count.push(Number(str[i]));
  return count;
}
function getStats() {
  let count = [];
  const str = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  const str2 = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
	for (let i = 0; i < str.length-1; i++) {
		count[i] = [];
		count[i].push(str2[i]);
		count[i].push(Number(str[i]));

	}
  return count;
}

// function writeStats() {
//   let count = [];
//   const str = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
//   const str2 = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
// 	fs.writeFileSync("./data/stats.txt", "");
//   for (let i = 0; i < str.length; i++) {
//     count[i] = [];
//     count[i].push(str2[i]);
// 		count[i].push(Number(str[i]));
// 		fs.appendFileSync("./currentFile.txt", count[i]);
// 	}

//   return count;
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
